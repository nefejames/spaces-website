import Image from "next/image";
import styled from "styled-components";
import { SectionLayout } from "../Layout";
import { StyledButton, StyledH1 } from "../styles/styles";
import HeroImg from "../public/images/hero.jpg";
export default function Hero() {
  return (
    <SectionLayout smallMargin>
      <StyledHeroContainer>
        <div className="copy">
          <StyledH1>Convallis turpis erat tempus, viverra aliquet.</StyledH1>
          <StyledButton>Get Started</StyledButton>
        </div>
        <div className="img-box">
          <Image
            src={HeroImg}
            layout="fill"
            objectFit="cover"
            alt="apple watch on wrist"
            placeholder="blur"
          />
        </div>
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

  .copy {
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      width: 40%;
    }
  }

  .img-box {
    width: 500px;
    max-width: 100%;
    height: 500px;
    background: transparent;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
  }
`;
