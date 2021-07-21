import { SectionLayout } from "../Layout";
import { StyledGrid } from "../styles/styles";
import { TeamCard } from "../components/Cards";
import team1 from "../public/images/team/team1.jpg";
import team2 from "../public/images/team/team2.jpg";
import team3 from "../public/images/team/team3.jpg";
import team4 from "../public/images/team/team4.jpg";

const teamData = [
  {
    id: 1,
    name: "Monkey D. Luffy",
    position: "President & CEO",
    img: team1,
  },
  {
    id: 2,
    name: "Trafalgar Law",
    position: "COO",
    img: team2,
  },
  {
    id: 3,
    name: "Nefertari Vivi",
    position: "Head of Product",
    img: team3,
  },
  {
    id: 4,
    name: "Jimbe Vivi",
    position: "Head of Product",
    img: team4,
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
