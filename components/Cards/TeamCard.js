import Image from "next/image";
import styled from "styled-components";

export default function TeamCard({ name, position, img }) {
  return (
    <StyledTeamContainer>
      <div className="box">
        <Image
          src={img}
          layout="fill"
          placeholder="blur"
          objectFit="cover"
          alt="team member"
        />
      </div>
      <h4>{name}</h4>
      <p>{position}</p>
    </StyledTeamContainer>
  );
}

const StyledTeamContainer = styled.div`
  @media (min-width: 768px) {
    text-align: center;
  }

  .box {
    background: transparent;
    border-radius: 5px;
    height: 250px;
    position: relative;
    margin-bottom: 1rem;
    overflow: hidden;
    box-shadow: 10px 10px 20px 3px rgba(39, 92, 141, 0.1);
  }

  h4 {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 110%;
    letter-spacing: -0.03em;
    margin-bottom: 0.2rem;
  }
`;
