package stops

import (
	"strconv"

	"github.com/MatusTabi/Shalinle/apps/api/internal/stops"
	"github.com/gin-gonic/gin"
)

type Handler struct {
	service stops.Service
}

func NewHandler(service stops.Service) *Handler {
	return &Handler{service: service}
}

// GetStopByID godoc
// @Summary Get a stop by ID
// @Description Get a stop by its ID
// @Tags stops
// @ID getStopByID
// @Accept json
// @Produce json
// @Param id path int true "Stop ID"
// @Success 200 {object} StopDetailResponseDTO
// @Failure 400 {object} ErrorResponse
// @Failure 500 {object} ErrorResponse
// @Router /api/stops/{id} [get]
func (h *Handler) GetStopByID(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(400, ErrorResponse{Error: "Invalid stop ID"})
		return
	}

	stop, err := h.service.GetStopByID(int32(id))
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "Failed to retrieve stop"})
		return
	}

	stopDto := mapStopToDetailDTO(stop)

	c.JSON(200, stopDto)
}

// GetStops godoc
// @Summary Get all stops
// @Description Get a list of all stops
// @Tags stops
// @ID getStops
// @Accept json
// @Produce json
// @Success 200 {array} StopDetailResponseDTO
// @Failure 500 {object} ErrorResponse
// @Router /api/stops [get]
func (h *Handler) GetStops(c *gin.Context) {
	stops, err := h.service.GetStops()
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "Failed to retrieve stops"})
		return
	}

	stopDtos := mapStopsToDTOs(stops)

	c.JSON(200, stopDtos)
}
