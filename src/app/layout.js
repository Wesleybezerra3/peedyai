import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "Peedy.ai - Delivery do seu jeito, com o controle que você precisa ",
  description: "Plataforma de delivery que coloca você no controle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
