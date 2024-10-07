"use client";
import styled from "styled-components";
import ReButton from "./Button";

const Header = () => {
  return (
    <Background>
      <Wrapper>
        <LogoWrapper>BLinkStudio</LogoWrapper>
        <NavWrapper>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Work</li>
            <li>Blogs</li>
          </ul>
        </NavWrapper>
        <ReButton>Let's Work </ReButton>
      </Wrapper>
    </Background>
  );
};
export default Header;

const Background = styled.div`
  margin: 8px;
`;
const Wrapper = styled.div`
  color: white;
  background-color: black;
  border-radius: 10px;
  padding: 10px 50px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div`
  font-size: 32px;
  font-weight: 600;
`;
const NavWrapper = styled.div`
  ul {
    display: flex;
    gap: 100px;
  }
  li {
    font-size: 18px;
  }
`;
