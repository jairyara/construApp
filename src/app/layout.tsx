import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
      template: "%s | ConstruApp",
      default: "ConstruApp",
  },
  description: "Gestión integral de proyectos de construcción",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body>
        {children}
      </body>
    </html>
  );
}
