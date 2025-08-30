import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Desarrollador Web | Miguel Ángel Montilla Garcia",
  description: "Portfolio personal de Miguel Ángel Montilla Garcia",
  keywords: ["desarrollador web en madrid", "full stack", "portfolio", "Miguel Ángel Montilla Garcia"],
  authors: [{ name: "Miguel Ángel Montilla Garcia" }],
  creator: "Miguel Ángel Montilla Garcia",
  openGraph: {
    title: "Desarrollador Web en Madrid | Miguel Ángel Montilla Garcia",
    description: "Portfolio personal de Miguel Ángel Montilla Garcia - Desarrollador Web Full Stack",
    type: "website",
  },
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
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
