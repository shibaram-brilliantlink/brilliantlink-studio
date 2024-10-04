// "use client";
import type { Metadata } from "next";
import { Raleway, Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BLink Studio",
  description: "Brilliant link studio",
};
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true, //preload keyfonts to reduce loading time.
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} ${poppins.className}`}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
