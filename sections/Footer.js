import styled from "styled-components";
import Image from "next/image";
import { SmallText } from "../styles/styles";
import { SectionLayout } from "../Layout";
import Logo from "../Logo";

const FooterLinksColumn = ({ link }) => (
  <FooterLI>
    <FooterA href="#">{link}</FooterA>
  </FooterLI>
);

const PageLinks = [
  { id: 1, link: "Template" },
  { id: 2, link: "Price" },
  { id: 3, link: "Help" },
  { id: 4, link: "Contact" },
];

const DemoLinks = [
  { id: 1, link: "Dark theme" },
  { id: 2, link: "Light theme" },
  { id: 3, link: "Custom theme" },
];

const ResourceLinks = [{ id: 1, link: "Documentation" }];

export default function Footer() {
  return (
    <StyledFooter>
      <SectionLayout smallMargin>
        <FooterGridWrapper>
          {/* CHILD ONE */}
          <FooterGridChild>
            <Logo />
            <FooterCopy>
              <FooterSmallText>
                The best design for your web studio website. Vitae nulla nunc
                euismod vel pretium tellus accumsan semper. Vitae nulla nunc
                euismod vel pretium tellus accumsan semper.
              </FooterSmallText>
            </FooterCopy>
          </FooterGridChild>

          {/* CHILD TWO */}
          <FooterGridChild>
            <FooterHeading>Pages</FooterHeading>

            <FooterUL>
              {PageLinks.map((pageLink) => (
                <FooterLinksColumn key={pageLink.id} {...pageLink} />
              ))}
            </FooterUL>
          </FooterGridChild>
          {/* CHILD THREE */}
          <FooterGridChild>
            <FooterHeading>Demos</FooterHeading>

            <FooterUL>
              {DemoLinks.map((demoLink) => (
                <FooterLinksColumn key={demoLink.id} {...demoLink} />
              ))}
            </FooterUL>
          </FooterGridChild>
          {/* CHILD FOUR */}
          <FooterGridChild>
            <FooterHeading>Resources</FooterHeading>

            <FooterUL>
              {ResourceLinks.map((resource) => (
                <FooterLinksColumn key={resource.id} {...resource} />
              ))}
            </FooterUL>
          </FooterGridChild>
        </FooterGridWrapper>
      </SectionLayout>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: #232424;
  color: #fff;
  padding: 1rem 0;

  svg {
    fill: #fff;
  }
`;

const FooterSectionLayout = styled(SectionLayout)`
  background: red;
`;

const FooterCopy = styled.div`
  margin-top: 0.6rem;
`;

const FooterSmallText = styled(SmallText)`
  color: gray;
`;

const FooterGridWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const FooterGridChild = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  /* &:first-child {
    width: 400px;
    outline: 2px solid red;
  } */

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

const FooterHeading = styled(SmallText)`
  color: gray;
  margin-bottom: 1rem;
`;

const FooterUL = styled.ul``;

const FooterLI = styled.li`
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const FooterA = styled.a`
  color: #ffffff;
  font-size: 1rem;
  text-decoration: none;
`;
