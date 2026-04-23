package main

import (
	game "github.com/MatusTabi/Shalinle/apps/api/internal/game"
	stops "github.com/MatusTabi/Shalinle/apps/api/internal/stops"
	"github.com/MatusTabi/Shalinle/apps/api/internal/transport/http"
	gameHttp "github.com/MatusTabi/Shalinle/apps/api/internal/transport/http/game"
	stopsHttp "github.com/MatusTabi/Shalinle/apps/api/internal/transport/http/stops"
)

func main() {
	stopsRepository := stops.NewRepository()
	gameRepository := game.NewRepository()

	stopsService := stops.NewService(stopsRepository)
	gameService := game.NewService(gameRepository)

	stopsHandler := stopsHttp.NewHandler(stopsService)
	gameHandler := gameHttp.NewHandler(gameService)

	router := http.SetupHandler(stopsHandler, gameHandler)

	router.Run(":8080")
}
