"use client";
import styled from "styled-components";

export default function Home() {
  return <Wrapper>Click here button</Wrapper>;
}
const Wrapper = styled.button`
  background-color: lightcoral;
  padding: 10px;

  &:hover {
    background-color: #ffa6a6c3;
  }
`;
