import styled from "styled-components";
import { Nav } from "../components";
import Logo from "../Logo";
//consider also using the section wrapper on the header.

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 2rem 0;
  }
`;
