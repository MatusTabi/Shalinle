package stops

type StopResponseDTO struct {
	ID   int32  `json:"id"`
	Name string `json:"name"`
}

type StopDetailResponseDTO struct {
	ID   int32  `json:"id"`
	Name string `json:"name"`
}
