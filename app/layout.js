import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../public/css/custom.css"
import Main from "./main";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luxury Car Rentals | QuickLease",
  description: "Luxury Car Rentals | QuickLease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}  >
        <Main>{children}</Main>
      </body>
    </html>
  );
}
