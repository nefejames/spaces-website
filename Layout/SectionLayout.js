import styled from "styled-components";

export default function SectionLayout({ children, title, smallMargin }) {
  return (
    <StyledSectionWrapper smallMargin={smallMargin}>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSectionWrapper>
  );
}

const StyledSectionWrapper = styled.div`
  max-width: 1100px;
  padding: 0 1rem;
  margin: 4rem auto;

  @media (min-width: 768px) {
    margin: ${(props) => (props.smallMargin ? "7rem auto" : "10rem auto")};
  }
`;

const StyledTitle = styled.h4`
  font-size: calc(1.1rem + 0.3vw);
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    text-align: center;
    margin-bottom: 2rem;
  }
`;
