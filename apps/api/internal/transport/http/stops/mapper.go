package stops

import (
	"github.com/MatusTabi/Shalinle/apps/api/internal/stops"
)

func mapStopToDTO(stop *stops.Stop) *StopResponseDTO {
	return &StopResponseDTO{
		ID:   stop.ID,
		Name: stop.Name,
	}
}

func mapStopToDetailDTO(stop *stops.Stop) *StopDetailResponseDTO {
	return &StopDetailResponseDTO{
		ID:   stop.ID,
		Name: stop.Name,
	}
}

func mapStopsToDTOs(stops []*stops.Stop) []*StopResponseDTO {
	dtos := make([]*StopResponseDTO, len(stops))
	for i, stop := range stops {
		dtos[i] = mapStopToDTO(stop)
	}
	return dtos
}
