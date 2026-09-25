export interface Actor {
  id: string;
  name: string;
  photo: string;
  nationality: string;
  birthDate: string; // formato ISO, ej. "1965-06-17T00:00:00.000Z"
  biography: string;
}