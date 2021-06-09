import { useState } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import Burger from "./Burger";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav>
      <Burger open={open} setOpen={setOpen} />
      <NavLinks open={open} />
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
