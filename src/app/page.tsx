"use client";
import { CommonWrapper } from "@/styles/CommonStyles";
import Link from "next/link";
import styled from "styled-components";

// async function delayFetchData() {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return { data: "Random data to check loading component" };
// }
const HomePage = () => {
  // const data = await delayFetchData();
  return (
    <>
      <Wrapper>
        <span>Hello font used from var(--font-heading)</span>
        Hello from homepage;
        <p>Verifying git changes are updated in deployment or not</p>
        <br />
        <br />
        <p>data.data to test loading</p>
      </Wrapper>
      <Div id="home2">
        <Link href={{ pathname: "/contact", hash: "#contact2" }}>
          {" "}
          Home page id- home2
          <button>Click here to navigate to contact2</button>
        </Link>
      </Div>
    </>
  );
};
export default HomePage;

const Wrapper = styled(CommonWrapper)`
  background-color: lightgreen;
  height: 100vh;
`;
const Div = styled(CommonWrapper)`
  height: 80vh;
  background-color: #fff;
  color: black;
`;
