import { ProcessCard } from "../components/Cards";
import { StyledGrid } from "../styles/styles";
import { SectionLayout } from "../Layout";

const processData = [
  {
    id: 1,
    title: "Audit",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus.",
  },
  {
    id: 2,
    title: "Teamwork",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus.",
  },
  {
    id: 3,
    title: "Create",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus.",
  },
];

export default function Process() {
  return (
    <SectionLayout>
      <StyledGrid>
        {processData.map((process) => (
          <ProcessCard key={process.id} {...process} />
        ))}
      </StyledGrid>
    </SectionLayout>
  );
}
