'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getActors, deleteActor } from '@/app/services/api';

export default function ActoresPage() {
  const [actores, setActores] = useState<any[]>([]);

  const cargarActores = () => {
    getActors().then((data) => setActores(data || []));
  };

  useEffect(() => {
    cargarActores();
  }, []);

  const handleDelete = async (id: string | number) => {
    if (confirm('¿Seguro que deseas eliminar este actor?')) {
      await deleteActor(id);
      cargarActores();
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Actores</h1>
      <Link href="/crear">
        <button style={{ marginBottom: '15px', padding: '8px 12px' }}>+ Crear Actor</button>
      </Link>
      <ul>
        {actores.map((actor) => (
          <li key={actor.id} style={{ marginBottom: '10px' }}>
            <strong>{actor.name}</strong>
            <div style={{ display: 'inline-block', marginLeft: '15px' }}>
              <Link href={`/actores/${actor.id}/edit`}>
                <button style={{ marginRight: '5px' }}>Editar</button>
              </Link>
              <button onClick={() => handleDelete(actor.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}