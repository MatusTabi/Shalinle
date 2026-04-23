package stops

import (
	"github.com/MatusTabi/Shalinle/apps/api/internal/stops"
	"github.com/gin-gonic/gin"
)

type Handler struct {
	service stops.Service
}

func NewHandler(service stops.Service) *Handler {
	return &Handler{service: service}
}

func (h *Handler) GetStopByID(c *gin.Context) {
	stop, err := h.service.GetStopByID(c.Param("id"))
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to retrieve stop"})
		return
	}

	c.JSON(200, stop)
}

func (h *Handler) GetStops(c *gin.Context) {
	stops, err := h.service.GetStops()
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to retrieve stops"})
		return
	}

	c.JSON(200, stops)
}
