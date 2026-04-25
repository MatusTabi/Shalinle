package game

import (
	"log"
	"slices"
)

type Service interface {
	StartGame() (*Game, error)
	GuessStop(gameId int32, stopId int32) (*Guess, error)
}

type ServiceImpl struct {
	repo Repository
}

func NewService(repo Repository) *ServiceImpl {
	return &ServiceImpl{repo: repo}
}

func (s *ServiceImpl) StartGame() (*Game, error) {
	// Implement the logic to start a new game
	game := &Game{
		ID:    1,
		Name:  "New Game",
		Stops: []int32{},
	}
	err := s.repo.SaveGame(game)
	if err != nil {
		return nil, err
	}
	return game, nil
}

func (s *ServiceImpl) GuessStop(gameId int32, stopId int32) (*Guess, error) {
	game, err := s.repo.GetGameByID(gameId)
	if err != nil {
		return nil, err
	}

	isStopinPath := slices.Contains(game.Stops, stopId)

	if isStopinPath {
		log.Printf("Correct guess for game %d: stop %d is in the path", gameId, stopId)
	} else {
		log.Printf("Incorrect guess for game %d: stop %d is not in the path", gameId, stopId)
		log.Printf("Game %d path: %v", gameId, game.Stops)
	}

	return &Guess{
		Correct: isStopinPath,
		GameID:  gameId,
		StopID:  stopId,
	}, nil
}
