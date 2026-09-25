"use client";

import { useEffect, useState } from "react";
import { Actor } from "../../types/actor";
import Link from "next/link";

export default function ActorsPage() {
  const [actors, setActors] = useState<Actor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/actors")
      .then((response) => response.json())
      .then((data: Actor[]) => {
        setActors(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando actores...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Actores</h1>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            {actor.name} — {actor.nationality}
          </li>
        ))}
      </ul>
    </div>
  );
}

