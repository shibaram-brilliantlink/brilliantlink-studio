"use client";
import styled from "styled-components";
import Image from "next/image";
import test from "/src/public/test.png"

// async function delayFetchData() {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return { data: "BRILLIANTLINK STUDIO" };
// }
export default function Home() {
  // const data = await delayFetchData();
  return (
    <HomeWrapper>
    <InfoWrapper>
      <LogoWrapper>
      
      </LogoWrapper>
      <Info>
        <h3>Empower Your Brand Through <br />
        Creativity and Technology</h3>
        <p>At BrilliantLink Studio, we combine creativity and <br />
         technology to bring your brand&apos;s vision to life. We deliver <br />
          digital solutions tailored to help your business grow, <br />
           engage customers, and stand out in a competitive world.</p>
      </Info>
    </InfoWrapper>
      <TitleWrapper>
      <h1>BRILLIANTLINK</h1>
      <CircleBox></CircleBox>
      <h1>STUDIO</h1>
      </TitleWrapper>
      <ImageWrapper>
      <Imge  src={test} alt="*"/>
      </ImageWrapper>
    </HomeWrapper>
  );
}
const HomeWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 0px 50px;
  margin: 0px 8px;
  border-radius: 10px;
`;
const InfoWrapper=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  gap: 650px;
`
const LogoWrapper=styled.div`
  background-color: #FFA629;
  width: 200px;
  height: 200px;
  border-radius: 150px;
`
const Info=styled.div`
h3{
  font-size: 36px;
}
  p{
    font-size: 18px;
    padding-top: 20px;
  }
`
const TitleWrapper=styled.div`
justify-content: center;
display: flex;
align-items: center;
gap: 20px;
padding: 50px 0px;
  h1{
  font-size: 112px;
  }
`
const CircleBox=styled.div`
  background-color:  #FFA629;
  width: 100px;
  height: 100px;
  border-radius: 100px;
`
const ImageWrapper=styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
`
const Imge=styled(Image)`
  width: 600px;
  height: 400px;
  border-radius: 10px;
`