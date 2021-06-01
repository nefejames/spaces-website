import styled from "styled-components";

export const StyledButton = styled.button`
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  background: #0e6fff;
  padding: 0.5rem 1.3rem;
  border-radius: 0.2rem;
`;

export const StyledGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
