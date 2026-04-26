package stops

type Service interface {
	GetStops() ([]*Stop, error)
	GetStopByID(id int32) (*Stop, error)
}

type ServiceImpl struct {
	repo Repository
}

func NewService(repo Repository) *ServiceImpl {
	return &ServiceImpl{repo: repo}
}

func (s *ServiceImpl) GetStops() ([]*Stop, error) {
	return s.repo.GetStops()
}

func (s *ServiceImpl) GetStopByID(id int32) (*Stop, error) {
	return s.repo.GetStopByID(id)
}
