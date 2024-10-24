// "use client";
// import styled from "styled-components";
import { DynaPuff, Inter } from "next/font/google";
import "@/styles/font.css";
export const dynapuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
  variable: "--font-dynapuff",
});
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Myfontpage() {
  return (
    <div>
      <h1>All fonts (ralway from default layout body - )</h1>
      <br />
      <h1 className={dynapuff.className}>
        Dyna puff font :- "dynapuff.className"
      </h1>
      <br />
      <hr />
      <br />
      <h1 style={{ fontFamily: dynapuff.style.fontFamily }}>
        Dyna puff font :- "fontFamily: dynapuff.style.fontFamily"
      </h1>
      <br />
      <hr />
      <br />
      <div className={inter.variable}>
        <h1 className="inter-font">Normal font -"Inter"</h1>
        <h1>Normal font W ralway</h1>
        <p>notma lfondf </p>
        <h2>heading 2</h2>
        <h4>Geading 4</h4>
        <blockquote>HEWoo bvolkdfl lkadfj laksdfj</blockquote>
      </div>
    </div>
  );
}
// const H1 = styled.h1`
//   font-size: 60px;
//   /* font-family: var; */
// `;
