"use client";
import Link from "next/link";
import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h2>404</h2>
      <div>
        <p>Custom Page not found</p>
        <Link href="/">Return to Home</Link>{" "}
      </div>
    </NotFoundWrapper>
  );
};
export default NotFound;

const NotFoundWrapper = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(45deg, black, gray);
  color: white;
  gap: 20px;
  a {
    color: lightgreen;
  }
  h2 {
    border-right: 1px solid white;
    padding-right: 20px;
  }
`;
