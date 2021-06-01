import styled from "styled-components";

export default function ProcessCard({ children, title, details }) {
  return (
    <StyledCard>
      <StyledH4>{title}</StyledH4>
      <StyledP>{details}</StyledP>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background: #ffffff;
  box-shadow: 10px 10px 50px 3px rgba(39, 92, 141, 0.1);
  border-radius: 0.7rem;
  padding: calc(1.5rem + 0.3vw);
`;

const StyledH4 = styled.h4`
  font-weight: 500;
  font-size: 2rem;
  line-height: 110%;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
`;

const StyledP = styled.p`
  font-size: 1.1rem;
  line-height: 2rem;
  font-weight: 400;
`;
