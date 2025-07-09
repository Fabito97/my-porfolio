import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabian Muoghalu",
  description: "A modern & Minimalist Portfolio",
  icons: [
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/profile-image.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/profile-image.png' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
