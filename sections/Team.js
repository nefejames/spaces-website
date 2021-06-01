import styled from "styled-components";
import { SectionLayout } from "../Layout";
import { StyledGrid } from "../styles/styles";
import { TeamCard } from "../components/Cards";

const teamData = [
  { id: 1, name: "Monkey D. Luffy", position: "President & CEO" },
  { id: 2, name: "Trafalgar Law", position: "COO" },
  { id: 3, name: "Nefertari Vivi", position: "Head of Product" },
  { id: 3, name: "Jimbe Vivi", position: "Head of Product" },
];

export default function Team() {
  return (
    <SectionLayout title="Team">
      <StyledGrid fourColumns>
        {teamData.map((teammate) => (
          <TeamCard key={teammate.id} {...teammate} />
        ))}
      </StyledGrid>
    </SectionLayout>
  );
}

//const
