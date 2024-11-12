// "use client";
import type { Metadata } from "next";
import { Raleway, Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";

export const metadata: Metadata = {
  title: "BLink Studio",
  description: "Brilliant link studio",
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true, //preload keyfonts to reduce loading time.
  variable: "--font-raleway",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
  variable: "--font-poppins",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${poppins.variable}`}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};
export default RootLayout;
