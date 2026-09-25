import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav style={{ padding: '15px', background: '#e0e0e0', display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <Link href="/actores">Actores</Link>
          <Link href="/crear">Crear Actor</Link>
          <Link href="/movies">Películas</Link>
          <Link href="/prizes">Premios y Asignaciones</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
