"use client";
import styled from "styled-components";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav> Different nav bar (if/any) for about page</nav>
      <Wrapper>{children}</Wrapper>
      <footer> Different nav bar (if/any) for about page</footer>
    </section>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
