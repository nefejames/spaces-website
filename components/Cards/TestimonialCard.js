import styled from "styled-components";
import Image from "next/image";
import { SemiBoldText, SmallText } from "../../styles/styles";

export default function TestimonialCard({ review, name, position, img }) {
  return (
    <StyledTestimonialBox>
      <TestimonialCopy>
        <SemiBoldText> "{review}" </SemiBoldText>
      </TestimonialCopy>
      <TestimonialDetails>
        <CircularImageBox></CircularImageBox>
        <PersonInfoBox>
          <PersonName>{name}</PersonName>
          <SmallText>{position}</SmallText>
        </PersonInfoBox>
      </TestimonialDetails>
    </StyledTestimonialBox>
  );
}

const StyledTestimonialBox = styled.div`
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    width: 600px;
    margin: 0 auto 5rem;
  }
`;

const TestimonialCopy = styled.div`
  margin-bottom: 1rem;
`;

const TestimonialDetails = styled.div`
  display: flex;
  align-items: center;
`;

const PersonInfoBox = styled.div``;
const PersonName = styled(SmallText)`
  font-weight: 600;
`;

const CircularImageBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: red;
  margin-right: 1rem;
`;
