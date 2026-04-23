package stops

import "github.com/gin-gonic/gin"

func RegisterPublicRoutes(router *gin.RouterGroup, handler *Handler) {
	stops := router.Group("/stops")

	stops.GET("", handler.GetStops)
	stops.GET("/:id", handler.GetStopByID)
}

func RegisterAdminRoutes(router *gin.RouterGroup, handler *Handler) {

}
