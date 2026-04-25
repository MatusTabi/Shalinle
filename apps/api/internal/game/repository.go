package game

type Repository interface {
	SaveGame(game *Game) error
	GetGameByID(id int32) (*Game, error)
}

type RepositoryImpl struct {
	// This is where you would typically have a database connection or similar
}

type InMemoryRepository struct {
	games map[int32]*Game
}

func NewInMemoryRepository() *InMemoryRepository {
	games := make(map[int32]*Game)

	games[1] = &Game{
		ID:    1,
		Name:  "Example Game 1",
		Stops: []int32{1, 2, 3},
	}
	games[2] = &Game{
		ID:    2,
		Name:  "Example Game 2",
		Stops: []int32{4, 5, 6},
	}

	return &InMemoryRepository{
		games: games,
	}
}

func NewRepository() *RepositoryImpl {
	return &RepositoryImpl{}
}

func (r *RepositoryImpl) SaveGame(game *Game) error {
	// Implement the logic to save the game to the database
	return nil
}

func (r *RepositoryImpl) GetGameByID(id int32) (*Game, error) {
	// Implement the logic to retrieve a game by its ID from the database
	return &Game{ID: id, Name: "Example Game", Stops: []int32{}}, nil
}

func (r *InMemoryRepository) SaveGame(game *Game) error {
	r.games[game.ID] = game
	return nil
}

func (r *InMemoryRepository) GetGameByID(id int32) (*Game, error) {
	game, exists := r.games[id]
	if !exists {
		return nil, nil // or return an error if you prefer
	}
	return game, nil
}
