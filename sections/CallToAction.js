import styled from "styled-components";
import { SectionLayout } from "../Layout";
import { StyledButton, SmallText, SemiBoldText } from "../styles/styles";

export default function CallToAction() {
  return (
    <SectionLayout>
      <CTABox>
        <CTACopy>
          <CTAHeader>All-in-one platform for business</CTAHeader>
          <CTAText>
            Lorem ipsum dolor sit amet consectetur adipiscing Ac aliquam ac
            volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat,
            viverra magna risus.
          </CTAText>
        </CTACopy>
        <StyledButton>Get In Touch</StyledButton>
      </CTABox>
    </SectionLayout>
  );
}

const CTABox = styled.div`
  margin: 0 auto;
  border-radius: 0.7rem;
  background: #dbdaff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 4rem 6rem;

    align-items: flex-start;
  }
`;

const CTACopy = styled.div`
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 0;
  }
`;

const CTAHeader = styled(SemiBoldText)`
  margin-bottom: 1rem;
`;

const CTAText = styled(SmallText)`
  width: 90%;
`;
