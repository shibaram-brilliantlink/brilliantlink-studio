"use client";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <aside>Side bar for naviagtion</aside>
      <Wrapper>Hello from About Page</Wrapper>
      <aside>Right side bar for other</aside>
    </>
  );
}
const Wrapper = styled.main`
  background-color: lightcoral;
  height: 80vh;
  width: 70%;
  font-family: var(--font-heading);
`;
