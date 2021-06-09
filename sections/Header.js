import Image from "next/image";
import styled from "styled-components";
import { Nav } from "../components";

//consider also using the section wrapper on the header.

export default function Header() {
  return (
    <StyledHeader>
      <Image src="/logo.svg" alt="Spaces Logo" width={82} height={46} />
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
  /* padding: 0 1rem; */
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 2rem 0;
  }
`;
