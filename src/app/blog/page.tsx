//*** Imports                 ***//
"use client";
import styled from "styled-components";
import { CommonWrapper } from "@/styles/CommonStyles";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import PromotePopup from "@/components/PromotePopup";
import ToasterMessage from "@/components/ToasterMessage";

//*** Page logics, functions ***//

export default function Home() {
  return (
    <>
      <Header>
        <div>
          <h1>Blogs</h1>
          <p>Home Blogs</p>
        </div>
      </Header>
      <MainWrapper>
        <div>
          <h2>Component 1 Social Media Icons container</h2>
          <SocialMediaIcons />
        </div>
        <div>
          <h2>Component 2 Promotion Popup</h2>
          <PromotePopup />
        </div>
        <div>
          <h2>Component 2 Toaster Message Popup</h2>
          <ToasterMessage />
        </div>
      </MainWrapper>
    </>
  );
}

//*** Styles                    ***//
const Header = styled.header`
  height: 100px;
`;
const MainWrapper = styled(CommonWrapper)`
  min-height: 80vh;
  h2 {
    margin-bottom: 10px;
  }
  > div {
    margin: 30px 0;
  }
`;
