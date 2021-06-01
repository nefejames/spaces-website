import styled from "styled-components";

export default function ProcessCard({ name, position }) {
  return (
    <StyledTeamContainer>
      <StyledBox />
      <StyledH4>{name}</StyledH4>
      <p>{position}</p>
    </StyledTeamContainer>
  );
}

const StyledTeamContainer = styled.div`
  //padding: calc(1.5rem + 0.3vw);
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const StyledBox = styled.div`
  background: #ffc928;
  box-shadow: 10px 10px 20px 3px rgba(39, 92, 141, 0.1);
  /* box-shadow: 10px 10px 50px 3px rgba(39, 92, 141, 0.1); */
  border-radius: 0.7rem;
  height: 250px;
  margin-bottom: 1rem;
`;

const StyledH4 = styled.h4`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 110%;
  letter-spacing: -0.03em;
  margin-bottom: 0.2rem;
`;

const StyledP = styled.p`
  font-size: 1.1rem;
  line-height: 2rem;
  font-weight: 400;
`;
