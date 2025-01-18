import type { Metadata } from "next";
import "./globals.scss";
import { Cormorant, Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "КОСМЕТОЛОГ - НАИДА РИЗВАНОВНА",
};

const cormorant = Cormorant({
  weight: ["300", "400", "600", "700"],
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
