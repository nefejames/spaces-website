import Image from "next/image";
import styled from "styled-components";
import { SectionLayout } from "../Layout";
import { StyledButton, StyledH1 } from "../styles/styles";

export default function Hero() {
  return (
    <SectionLayout smallMargin>
      <StyledHeroContainer>
        <StyledCopy>
          <StyledH1>Convallis turpis erat tempus, viverra aliquet.</StyledH1>
          <StyledButton>Get Started</StyledButton>
        </StyledCopy>
        <StyledImageBox>
          <Image src="/images/hero.jpg" layout="fill" />
        </StyledImageBox>
      </StyledHeroContainer>
    </SectionLayout>
  );
}

const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledCopy = styled.div`
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

const StyledImageBox = styled.div`
  width: 500px;
  max-width: 100%;
  height: 500px;
  background: transparent;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
`;

// const StyledH1 = styled.h1`
//   font-weight: bold;
//   font-size: 3.1rem;
//   line-height: 110%;
//   letter-spacing: -0.045em;
//   color: #23242a;
//   margin-bottom: 1.5rem;

//   @media (min-width: 768px) {
//     font-size: 4rem;
//   }
// `;
