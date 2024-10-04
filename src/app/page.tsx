"use client";
import styled from "styled-components";

async function delayFetchData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { data: "Random data to check loading component" };
}
export default async function Home() {
  const data = await delayFetchData();
  return (
    <Wrapper>
      Hello from homepage;
      <p>Verifying git changes are updated in deployment or not</p>
      <br />
      <br />
      <p>{data.data}</p>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: lightgreen;
  height: 80vh;
`;
