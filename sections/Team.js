import styled from "styled-components";
import { SectionLayout } from "../Layout";
import { StyledGrid } from "../styles/styles";
import { TeamCard } from "../components/Cards";

const teamData = [
  {
    id: 1,
    name: "Monkey D. Luffy",
    position: "President & CEO",
    imageUrl: "/images/team/team1.jpg",
  },
  {
    id: 2,
    name: "Trafalgar Law",
    position: "COO",
    imageUrl: "/images/team/team2.jpg",
  },
  {
    id: 3,
    name: "Nefertari Vivi",
    position: "Head of Product",
    imageUrl: "/images/team/team3.jpg",
  },
  {
    id: 4,
    name: "Jimbe Vivi",
    position: "Head of Product",
    imageUrl: "/images/team/team4.jpg",
  },
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
