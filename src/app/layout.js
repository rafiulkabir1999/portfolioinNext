import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/component/Header";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Webdesigner Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
