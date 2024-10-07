"use client";
import styled from "styled-components";

export default function ReButton({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
const Wrapper = styled.button`
  background-color: white;
  padding: 10px 20px;
  color: black;
  border-radius: 15px;
  border: none;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    background-color: yellow;
  }
`;
