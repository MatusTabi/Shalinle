package stops

type Repository interface {
	SaveStop(stop *Stop) (*Stop, error)

	GetStops() ([]*Stop, error)
	GetStopByID(id string) (*Stop, error)
}

type RepositoryImpl struct {
}

func NewRepository() *RepositoryImpl {
	return &RepositoryImpl{}
}

func (r *RepositoryImpl) SaveStop(stop *Stop) (*Stop, error) {
	// Implement the logic to save the stop to the database
	return stop, nil
}

func (r *RepositoryImpl) GetStops() ([]*Stop, error) {
	// Implement the logic to retrieve all stops from the database
	return []*Stop{{ID: "1", Name: "Example Stop 1"}, {ID: "2", Name: "Example Stop 2"}}, nil
}

func (r *RepositoryImpl) GetStopByID(id string) (*Stop, error) {
	// Implement the logic to retrieve a stop by its ID from the database
	return &Stop{ID: id, Name: "Example Stop"}, nil
}
