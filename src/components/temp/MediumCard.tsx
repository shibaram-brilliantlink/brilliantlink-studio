import styled from "styled-components";
export default function MediumCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <StyledWrapper>
      <div>
        <span>Medium card</span>
        <img src={"/engineers1.jpeg"} alt="engineer" />
      </div>
      <div>
        <h4>{title || "Medium card title lorem ipsum kitoi"}</h4>
        <p>
          {description ||
            "Medium card description lorem ipsum kiotjjll lorem ipusm lorem ipsum lorem ipsum lorem ipsu..."}
        </p>
        <a href="/">Read more...</a>
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  border: 0.1px dashed gray;
  border-radius: 10px;
  overflow: hidden;
  width: 400px;
  padding: 16px;
  background-color: #4b4bfd;

  span {
    font-size: 12px;
  }
  img {
    width: 100%;
  }
  a {
    background-color: gray;
    text-align: center;
    padding: 4px;
    margin-top: 10px;
    border-radius: 4px;
  }
  &:hover {
    background-color: transparent;
  }
`;
