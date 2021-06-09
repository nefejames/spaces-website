import styled from "styled-components";
import { StyledButton } from "../styles/styles";

export default function NavLinks({ open }) {
  return (
    <StyledUl open={open}>
      <StyledLi>
        <StyledA href="#">Home</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA href="#">Templates</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA href="#">Price</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA href="#">Help</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledButton>Get In Touch</StyledButton>
      </StyledLi>
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 80%;
    width: 100%;
    z-index: 2;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const StyledLi = styled.li`
  font-size: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #23242a;
`;
