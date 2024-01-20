import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/component/Header";
import Footer from "./component/Footer";
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
        <Footer />
      </body>
    </html>
  );
}
