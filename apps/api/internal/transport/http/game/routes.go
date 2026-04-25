package game

import (
	"github.com/gin-gonic/gin"
)

func RegisterPublicRoutes(router *gin.RouterGroup, handler *Handler) {
	game := router.Group("/game")

	game.POST("/start", func(c *gin.Context) {
		result, err := handler.StartGame()
		if err != nil {
			c.JSON(500, gin.H{"error": "Failed to start game"})
			return
		}

		c.JSON(200, result)
	})

	game.POST("/guess", func(ctx *gin.Context) {
		var req struct {
			GameID int32 `json:"gameId"`
			StopID int32 `json:"stopId"`
		}

		if err := ctx.BindJSON(&req); err != nil {
			ctx.JSON(400, gin.H{"error": "Invalid request"})
			return
		}

		result, err := handler.GuessStop(req.GameID, req.StopID)
		if err != nil {
			ctx.JSON(500, gin.H{"error": "Failed to process guess"})
			return
		}

		ctx.JSON(200, result)
	})
}
