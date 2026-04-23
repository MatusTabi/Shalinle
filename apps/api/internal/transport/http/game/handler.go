package game

import (
	"github.com/MatusTabi/Shalinle/apps/api/internal/game"
)

type Handler struct {
	service game.Service
}

func NewHandler(service game.Service) *Handler {
	return &Handler{service: service}
}

func (h *Handler) StartGame() (*game.Game, error) {
	return h.service.StartGame()
}

func (h *Handler) GuessStop(gameId int, stopId int) (*game.Guess, error) {
	return h.service.GuessStop(gameId, stopId)
}
