import styled from "styled-components";

export const StyledButton = styled.button`
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  background: #0e6fff;
  padding: 0.5rem 1.3rem;
  border-radius: 0.2rem;
`;

export const StyledGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: ${(props) =>
    props.fourColumns
      ? "repeat(auto-fit, minmax(200px, 1fr))"
      : "repeat(auto-fit, minmax(300px, 1fr))"};
`;

export const StyledH1 = styled.h1`
  font-weight: bold;
  font-size: 3.1rem;
  line-height: 110%;
  letter-spacing: -0.045em;
  color: #23242a;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const StyledH2 = styled.h2`
  font-size: calc(1.1rem + 0.3vw);
`;

export const StyledH3 = styled.h3``;
export const StyledH4 = styled.h4``;

export const BoldText = styled.p``;
export const SemiBoldText = styled.p`
  font-size: 1.6rem;
`;

export const SmallText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;
