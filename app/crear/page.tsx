"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function CrearPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [nationality, setNationality] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [biography, setBiography] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newActor = { name, photo, nationality, birthDate, biography };

    try {
      const response = await fetch("http://localhost:3000/api/v1/actors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newActor),
      });
      if (!response.ok) throw new Error(`Error ${response.status}`);
      router.push("/actores");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Crear Actor</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Foto (URL)</label>
          <input value={photo} onChange={(e) => setPhoto(e.target.value)} />
        </div>
        <div>
          <label>Nacionalidad</label>
          <input
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>
        <div>
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div>
          <label>Biografía</label>
          <textarea
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}