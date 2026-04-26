package http

import (
	"github.com/MatusTabi/Shalinle/apps/api/internal/transport/http/game"
	"github.com/MatusTabi/Shalinle/apps/api/internal/transport/http/stops"
	"github.com/gin-gonic/gin"
)

func SetupHandler(stopsHandler *stops.Handler, gameHandler *game.Handler) *gin.Engine {
	router := gin.Default()

	api := router.Group("/api")

	stops.RegisterRoutes(api, stopsHandler)
	game.RegisterRoutes(api, gameHandler)

	return router
}
