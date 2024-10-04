"use client";
import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingWrapper>Home Page is loading, Please wait..... </LoadingWrapper>
  );
}
const LoadingWrapper = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(45deg, black, gray);
  color: white;
`;
