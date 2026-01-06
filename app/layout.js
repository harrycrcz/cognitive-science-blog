// app/layout.js

import "./globals.css";

export const metadata = {
  title: "CogniScience - Blog sobre Ciencia Cognitiva",
  description: "Artículos sobre memoria, atención y procesamiento cognitivo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}