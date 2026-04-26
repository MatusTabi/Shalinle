package stops

type Repository interface {
	SaveStop(stop *Stop) (*Stop, error)

	GetStops() ([]*Stop, error)
	GetStopByID(id int32) (*Stop, error)
}

type RepositoryImpl struct {
}

type InMemoryRepository struct {
	stops map[int32]*Stop
}

func NewRepository() *RepositoryImpl {
	return &RepositoryImpl{}
}

func NewInMemoryRepository() *InMemoryRepository {
	stops := make(map[int32]*Stop)

	stops[1] = &Stop{ID: 1, Name: "Example Stop 1"}
	stops[2] = &Stop{ID: 2, Name: "Example Stop 2"}
	stops[3] = &Stop{ID: 3, Name: "Example Stop 3"}
	stops[4] = &Stop{ID: 4, Name: "Example Stop 4"}
	stops[5] = &Stop{ID: 5, Name: "Example Stop 5"}
	stops[6] = &Stop{ID: 6, Name: "Example Stop 6"}

	return &InMemoryRepository{
		stops: stops,
	}
}

func (r *RepositoryImpl) SaveStop(stop *Stop) (*Stop, error) {
	// Implement the logic to save the stop to the database
	return stop, nil
}

func (r *RepositoryImpl) GetStops() ([]*Stop, error) {
	// Implement the logic to retrieve all stops from the database
	return []*Stop{{ID: 1, Name: "Example Stop 1"}, {ID: 2, Name: "Example Stop 2"}}, nil
}

func (r *RepositoryImpl) GetStopByID(id int32) (*Stop, error) {
	// Implement the logic to retrieve a stop by its ID from the database
	return &Stop{ID: id, Name: "Example Stop"}, nil
}

func (r *InMemoryRepository) SaveStop(stop *Stop) (*Stop, error) {
	r.stops[stop.ID] = stop
	return stop, nil
}

func (r *InMemoryRepository) GetStops() ([]*Stop, error) {
	stops := make([]*Stop, 0, len(r.stops))
	for _, stop := range r.stops {
		stops = append(stops, stop)
	}
	return stops, nil
}

func (r *InMemoryRepository) GetStopByID(id int32) (*Stop, error) {
	stop, exists := r.stops[id]
	if !exists {
		return nil, nil // or return an error if you prefer
	}
	return stop, nil
}
