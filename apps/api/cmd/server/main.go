package main

import (
	game "github.com/MatusTabi/Shalinle/apps/api/internal/game"
	stops "github.com/MatusTabi/Shalinle/apps/api/internal/stops"
	"github.com/MatusTabi/Shalinle/apps/api/internal/transport/http"
	gameHttp "github.com/MatusTabi/Shalinle/apps/api/internal/transport/http/game"
	stopsHttp "github.com/MatusTabi/Shalinle/apps/api/internal/transport/http/stops"

	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"

	_ "github.com/MatusTabi/Shalinle/apps/api/docs"
)

// @title Shalinle API
// @version 1.0
// @description This is the API for Shalinle application.
// @host localhost:8080
// @BasePath /
func main() {
	stopsRepository := stops.NewRepository()
	gameRepository := game.NewInMemoryRepository()

	stopsService := stops.NewService(stopsRepository)
	gameService := game.NewService(gameRepository)

	stopsHandler := stopsHttp.NewHandler(stopsService)
	gameHandler := gameHttp.NewHandler(gameService)

	router := http.SetupHandler(stopsHandler, gameHandler)
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	router.Run(":8080")
}
