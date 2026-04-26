package game

type Game struct {
	ID    int32   `json:"id"`
	Name  string  `json:"name"`
	Stops []int32 `json:"stops"`
}

type Guess struct {
	GameID  int32 `json:"game_id"`
	StopID  int32 `json:"stop_id"`
	Correct bool  `json:"correct"`
	IsNext  bool  `json:"is_next"`
}
