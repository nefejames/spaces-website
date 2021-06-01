import { Children } from "react";
import styled from "styled-components";

export default function SectionLayout({ children }) {
  return <StyledSectionWrapper>{children}</StyledSectionWrapper>;
}

const StyledSectionWrapper = styled.div`
  max-width: 1100px;
  margin: 6rem auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
