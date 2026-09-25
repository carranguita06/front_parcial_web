'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getMovies } from '@/app/services/api';

export default function MoviesPage() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    getMovies().then((data) => setMovies(data || []));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Listado de Películas</h1>
      <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Fecha de Lanzamiento</th>
            <th>Autor / Actor</th>
            <th>Premio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.actorName || movie.actors?.[0]?.name || 'Sin autor'}</td>
              <td>{movie.prizeName || movie.prizes?.[0]?.name || 'Sin premio'}</td>
              <td>
                <Link href={`/movies/${movie.id}`}>Ver Detalle</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}