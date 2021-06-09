import Image from "next/image";
import styled from "styled-components";

export default function TeamCard({ name, position, imageUrl }) {
  return (
    <StyledTeamContainer>
      <StyledBox>
        <Image src={imageUrl} layout="fill" />
      </StyledBox>
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
  background: transparent;
  box-shadow: 10px 10px 20px 3px rgba(39, 92, 141, 0.1);
  /* box-shadow: 10px 10px 50px 3px rgba(39, 92, 141, 0.1); */
  border-radius: 5px;
  height: 250px;
  position: relative;
  margin-bottom: 1rem;
  overflow: hidden;
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
