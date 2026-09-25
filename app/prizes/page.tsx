'use client';

import { useState } from 'react';
import { createMovie, createPrize, assignMovieToActor, assignPrizeToMovie } from '@/app/services/api';

export default function PrizesAndAssignPage() {
  const [movieForm, setMovieForm] = useState({ title: '', releaseDate: '' });
  const [prizeName, setPrizeName] = useState('');
  const [actorRel, setActorRel] = useState({ actorId: '', movieId: '' });
  const [prizeRel, setPrizeRel] = useState({ movieId: '', prizeId: '' });

  return (
    <div style={{ padding: '20px', display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr' }}>
      {/* Crear Película */}
      <div style={{ border: '1px solid #ccc', padding: '15px' }}>
        <h3>Crear Película (/movies)</h3>
        <form onSubmit={async (e) => { e.preventDefault(); await createMovie(movieForm); alert('Película creada'); }}>
          <input type="text" placeholder="Título" onChange={(e) => setMovieForm({ ...movieForm, title: e.target.value })} required /><br /><br />
          <input type="date" onChange={(e) => setMovieForm({ ...movieForm, releaseDate: e.target.value })} required /><br /><br />
          <button type="submit">Guardar Película</button>
        </form>
      </div>

      {/* Crear Premio */}
      <div style={{ border: '1px solid #ccc', padding: '15px' }}>
        <h3>Crear Premio (/prizes)</h3>
        <form onSubmit={async (e) => { e.preventDefault(); await createPrize({ name: prizeName }); alert('Premio creado'); }}>
          <input type="text" placeholder="Nombre Premio" onChange={(e) => setPrizeName(e.target.value)} required /><br /><br />
          <button type="submit">Guardar Premio</button>
        </form>
      </div>

      {/* Asignar Película a Actor */}
      <div style={{ border: '1px solid #ccc', padding: '15px' }}>
        <h3>Asignar Película a Actor</h3>
        <p style={{ fontSize: '12px', color: '#666' }}><code>/actors/:actorId/movies/:movieId</code></p>
        <form onSubmit={async (e) => { e.preventDefault(); await assignMovieToActor(actorRel.actorId, actorRel.movieId); alert('Película asignada'); }}>
          <input type="text" placeholder="ID Actor" onChange={(e) => setActorRel({ ...actorRel, actorId: e.target.value })} required /><br /><br />
          <input type="text" placeholder="ID Película" onChange={(e) => setActorRel({ ...actorRel, movieId: e.target.value })} required /><br /><br />
          <button type="submit">Asignar Película</button>
        </form>
      </div>

      {/* Asignar Premio a Película */}
      <div style={{ border: '1px solid #ccc', padding: '15px' }}>
        <h3>Asignar Premio a Película</h3>
        <p style={{ fontSize: '12px', color: '#666' }}><code>/movies/:movieId/prizes/:prizeId</code></p>
        <form onSubmit={async (e) => { e.preventDefault(); await assignPrizeToMovie(prizeRel.movieId, prizeRel.prizeId); alert('Premio asignado'); }}>
          <input type="text" placeholder="ID Película" onChange={(e) => setPrizeRel({ ...prizeRel, movieId: e.target.value })} required /><br /><br />
          <input type="text" placeholder="ID Premio" onChange={(e) => setPrizeRel({ ...prizeRel, prizeId: e.target.value })} required /><br /><br />
          <button type="submit">Asignar Premio</button>
        </form>
      </div>
    </div>
  );
}