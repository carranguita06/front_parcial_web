'use client';

import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { getMovieById } from '@/app/services/api';

export default function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    getMovieById(id).then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p style={{ padding: '20px' }}>Cargando película...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Detalle: {movie.title}</h1>
      <p><strong>Fecha de Lanzamiento:</strong> {movie.releaseDate}</p>
      <p><strong>Descripción:</strong> {movie.description || 'Sin descripción'}</p>

      <h3>Autores / Actores:</h3>
      <ul>
        {movie.actors && movie.actors.length > 0 ? (
          movie.actors.map((actor: any) => <li key={actor.id}>{actor.name}</li>)
        ) : (
          <li>No tiene actores asignados</li>
        )}
      </ul>

      <h3>Premios:</h3>
      <ul>
        {movie.prizes && movie.prizes.length > 0 ? (
          movie.prizes.map((prize: any) => <li key={prize.id}>{prize.name}</li>)
        ) : (
          <li>Sin premios registrados</li>
        )}
      </ul>

      <br />
      <Link href="/movies">← Volver al listado</Link>
    </div>
  );
}