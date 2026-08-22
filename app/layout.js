import { Oranienbaum, Elsie, Ovo } from "next/font/google";
import "./globals.css";

const elsie = Elsie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-elsie",
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
      className={`${elsie.variable} ${ovo.variable} ${oranienbaum.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}