import styled from "styled-components";

export default function SmallCard({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <StyledWrapper>
      <div>
        {/* <img src={"/chain.png"} width="60" alt="Profile image" /> */}
      </div>
      <div>
        <p>Small Card</p>
        <h3>{title || "Lorem title is here"}</h3>
        <p>{date || "08.08.2021"}</p>
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  border: 1px dashed gray;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 10px;
  margin: 10px;
  h3 {
    padding: 4px 0;
  }
  p:first-child {
    font-size: 10px;
  }
  p:nth-child(3) {
    font-size: 14px;
    color: lightblue;
  }
  div:nth-child(2) {
    width: 80%;
  }
  &:hover {
    border: 1px solid gray;
  }
`;
