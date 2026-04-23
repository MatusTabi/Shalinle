package game

type Game struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type Guess struct {
	Correct bool `json:"correct"`
	GameID  int  `json:"game_id"`
	StopID  int  `json:"stop_id"`
}
