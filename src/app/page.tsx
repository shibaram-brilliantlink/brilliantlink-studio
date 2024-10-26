"use client";
import Link from "next/link";
import styled from "styled-components";

// async function delayFetchData() {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return { data: "Random data to check loading component" };
// }
export default function Home() {
  // const data = await delayFetchData();
  return (
    <>
      <Wrapper>
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
}
const Wrapper = styled.div`
  background-color: lightgreen;
  height: 100vh;
`;
const Div = styled.div`
  height: 80vh;
  background-color: #fff;
  color: black;
`;
