package game

type Service interface {
	StartGame() (*Game, error)
	GuessStop(gameId int, stopId int) (*Guess, error)
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
		ID:   "1",
		Name: "New Game",
	}
	err := s.repo.SaveGame(game)
	if err != nil {
		return nil, err
	}
	return game, nil
}

func (s *ServiceImpl) GuessStop(gameId int, stopId int) (*Guess, error) {
	return s.repo.GuessStop(gameId, stopId)
}
