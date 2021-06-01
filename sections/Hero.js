import Image from "next/image";
import styled from "styled-components";
import { SectionLayout } from "../Layout";
import { StyledButton } from "../styles/styles";

export default function Hero() {
  return (
    <SectionLayout>
      <StyledHeroContainer>
        <StyledCopy>
          <StyledH1>Convallis turpis erat tempus, viverra aliquet.</StyledH1>
          <StyledButton>Get Started</StyledButton>
        </StyledCopy>

        <StyledImageBox></StyledImageBox>
      </StyledHeroContainer>
    </SectionLayout>
  );
}

const StyledHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCopy = styled.div`
  width: 40%;
`;

const StyledImageBox = styled.div`
  width: 500px;
  height: 500px;
  background: #111;
`;

const StyledH1 = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  line-height: 110%;
  letter-spacing: -0.045em;
  color: #23242a;
  margin-bottom: 1.5rem;
`;
