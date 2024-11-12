// Widely used common, reusable, styled components will come here.(for now)--------------------------

import styled from "styled-components";

export const CommonWrapper = styled.div`
  //Mobile first approach
  padding-inline: 16px;
  margin-inline: auto;
  @media (min-width: 320px) {
    padding-inline: 20px;
  }
  @media (min-width: 768px) {
    padding-inline: 32px;
  }
  @media (min-width: 1440px) {
    padding-inline: 220px;
  }
  @media (min-width: 1920px) {
    padding-inline: 260px;
  }
`;
