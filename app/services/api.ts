const API_URL = "http://localhost:3000/api/v1"; // Reemplaza con la dirección de tu Backend

export const getActors = () => fetch(`${API_URL}/actors`).then(r => r.json());

export const updateActor = (id: string | number, data: any) => fetch(`${API_URL}/actors/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(r => r.json());

export const deleteActor = (id: string | number) => fetch(`${API_URL}/actors/${id}`, { method: 'DELETE' });

export const getMovies = () => fetch(`${API_URL}/movies`).then(r => r.json());

export const getMovieById = (id: string) => fetch(`${API_URL}/movies/${id}`).then(r => r.json());

export const createMovie = (data: any) => fetch(`${API_URL}/movies`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(r => r.json());

export const createPrize = (data: any) => fetch(`${API_URL}/prizes`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(r => r.json());

export const assignMovieToActor = (actorId: string, movieId: string) => 
  fetch(`${API_URL}/actors/${actorId}/movies/${movieId}`, { method: 'POST' });

export const assignPrizeToMovie = (movieId: string, prizeId: string) => 
  fetch(`${API_URL}/movies/${movieId}/prizes/${prizeId}`, { method: 'POST' });