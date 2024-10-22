import styled from "styled-components";

export default function LargeCard({
  title,
  description,
  date,
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <StyledWrapper>
      <div>
        <span>Large Card</span>
        <img src={"/engineer2.jpeg"} alt="Profile image" />
      </div>
      <div>
        <h3>{title || "Lorem title is here "}</h3>
        <p>
          {description ||
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sunt.`}
        </p>
        <p>{date || "08.08.2021"}</p>
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  border: 1px dashed gray;
  border-radius: 10px;
  display: inline-flex;
  gap: 16px;
  padding: 10px;
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
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* gap: 10px; */
  }
  &:hover {
    scale: 1.03;
  }
`;