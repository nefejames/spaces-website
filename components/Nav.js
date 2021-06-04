import styled from "styled-components";
import { StyledButton } from "../styles/styles";

export default function Nav() {
  return (
    <StyledNav>
      <StyledUl>
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
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  width: 500px;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const StyledLi = styled.li`
  font-size: 1rem;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #23242a;
`;
