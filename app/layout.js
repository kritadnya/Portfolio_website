import { Oranienbaum, Elsie, Ovo, Outfit } from "next/font/google";
import "./globals.css";

const elsie = Elsie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-elsie",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-outfit",
});

const oranienbaum = Oranienbaum({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oranienbaum",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Kriti's Portfolio",
  description: "Kriti's corner on the internet",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className='scroll-smooth'
    >
      <body className={`${outfit.variable} ${ovo.variable} ${oranienbaum.variable} ${elsie.variable} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}