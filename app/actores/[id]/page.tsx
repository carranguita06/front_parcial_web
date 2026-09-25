'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { getActors, updateActor } from '@/app/services/api';

export default function EditarActorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', biography: '', photo: '' });

  useEffect(() => {
    getActors().then((data: any[]) => {
      const actor = data.find((a: any) => String(a.id) === String(id));
      if (actor) {
        setFormData({
          name: actor.name || '',
          biography: actor.biography || '',
          photo: actor.photo || '',
        });
      }
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateActor(id, formData);
    router.push('/actores');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h1>Editar Actor</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre:</label><br />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Biografía:</label><br />
          <textarea
            value={formData.biography}
            onChange={(e) => setFormData({ ...formData, biography: e.target.value })}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Foto (URL):</label><br />
          <input
            type="text"
            value={formData.photo}
            onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}