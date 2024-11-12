"use client";
import { CommonWrapper } from "@/styles/CommonStyles";
import styled from "styled-components";

const Header = () => {
  return <Wrapper>Header is here ... Bro</Wrapper>;
};
export default Header;

const Wrapper = styled(CommonWrapper)`
  color: green;
  background-color: #d1f6fa;
  height: 100px;
  border: 1px solid black;
`;
