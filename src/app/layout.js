import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Component/Navbar";
import { ThemeProvider } from "@/UI/ThemeProvider";
import Footer from "@/Component/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Uphill E-commerce Store",
  description: "Buy the best products online with Uphill",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
