//*** Imports                 ***//
"use client";
import styled from "styled-components";
import { CommonWrapper } from "@/styles/CommonStyles";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import PromotePopup from "@/components/PromotePopup";
import ToasterMessage from "@/components/ToasterMessage";
import SmallCard from "@/components/temp/SmallCard";
import MediumCard from "@/components/temp/MediumCard";
import LargeCard from "@/components/temp/LargeCard";

//*** Page logics, functions ***//

export default function Home() {
  return (
    <>
      <Header>
        <div>
          <h1>Blogs</h1>
          <p>Home = Blogs</p>
        </div>
      </Header>
      <MainWrapper>
        <ToasterMessage message="Congrats! Your transaction was successful" />
        <PromotePopup title="" subtitle="" />
        <SmallCard title="" date="" />
        <MediumCard title="" description="" />
        <LargeCard title="" date="" description="" />
      </MainWrapper>
    </>
  );
}

//*** Styles                    ***//
const Header = styled.header`
  height: 400px;
  background-color: #ffffe013;
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
