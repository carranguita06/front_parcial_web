import Link from "next/link";
// ...tus imports existentes (fonts, css, etc.)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/actors">Actores</Link>
          {" | "}
          <Link href="/crear">Crear Actor</Link>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
