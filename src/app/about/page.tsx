"use client";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <aside>Side bar for naviagtion</aside>
      <Wrapper>
        <Link href={{ pathname: "/about", hash: "#about3" }}>
          {" "}
          Hello from About Page id-about1
        </Link>
      </Wrapper>
      <Div>Hello from About Page 2 id-about2</Div>
      <Wrapper id="about3">Hello from About Page 3 id-about3</Wrapper>
      <Div>
        {" "}
        <Link href={{ pathname: "/", hash: "home2" }}>
          Link to home page id - home2
        </Link>
      </Div>
      <aside>Right side bar for other</aside>
    </div>
  );
}
const Wrapper = styled.main`
  background-color: lightcoral;
  height: 80vh;
  font-family: var(--font-heading);
`;
const Div = styled.div`
  height: 80vh;
  background-color: #fff;
  color: black;
`;
