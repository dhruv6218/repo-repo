import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cosmic Verification Platform",
  description: "A modern verification platform for documents and identity verification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
