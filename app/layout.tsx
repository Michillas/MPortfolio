import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desarrollador Web | Miguel Ángel Montilla Garcia",
  description: "Portfolio personal de Miguel Ángel Montilla Garcia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
