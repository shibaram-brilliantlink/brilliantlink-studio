"use client";

import styled from "styled-components";

export type IBannerSectionProps = {
  heading?: string;
  description?: string;
  image?: string;
};

const BannerSection = (props: IBannerSectionProps) => {
  const { heading, image, description } = props;
  return (
    <Section image={image}>
      <div>
        <h1>{heading || "Title Lorem ipsum dolor sit amet."}</h1>
        <p>{description || ""}</p>
      </div>
    </Section>
  );
};
export default BannerSection;

const Section = styled.div<{ image?: string }>`
  /* background: rgba(255, 0, 0, 0.5); */
  background: ${({ image }) =>
    image
      ? `radial-gradient(rgba(0, 0, 0, 0.70) 5%, rgba(0, 0, 0, 0.95)), url(${image})`
      : `rgba(255,0,0,0.5)`};
  position: relative;
  height: 30vh;

  div {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
