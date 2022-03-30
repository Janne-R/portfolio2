import styled from "styled-components";
import { HandWrittenH2 } from "./Handwritten";
import BlockContainer from "./BlockContainer";
import NumbersGrid from "./NumbersGrid";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiAdobexd } from "react-icons/si";
import { HiSpeakerphone } from "react-icons/hi";

const Flex = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const H2 = styled(HandWrittenH2)`
text-align: start;
`;

const Experience = () => {
  return (
    <>
      <BlockContainer>
        <Flex>
          <div>
            <H2>Experience</H2>
            <NumbersGrid number="01" p="Company: Akasia AS - 2016-2020." p2="Job title: Marketing manager." />
            <NumbersGrid number="02" p="Company: Bergens Tidende AS - 2014-2016." p2="Job title: Account manager" />
            <NumbersGrid number="03" p="Company: Bergens Tidende AS - 2012-2014." p2="Job title: Sales consultant." />
          </div>
          <div>
            <div>
              <H2>Key qualifications</H2>
              <NumbersGrid number=<AiFillHtml5 /> p=" HTML - good use of tags and semantic building."/>
              <NumbersGrid number=<FaCss3Alt /> p="CSS - DRY principle in combination with Styled components."/>
              <NumbersGrid number=<DiJavascript1 /> p=" JavaScript and React."/>
              <NumbersGrid number=<HiSpeakerphone /> p="Digital marketing, SEO, advertising on social media and google. Google analytics web report. "/>
              <NumbersGrid number=<SiAdobexd /> p="Designing wireframes and prototypes in Adobe XD."/>
            </div>
          </div>
        </Flex>
      </BlockContainer>
    </>
  );
};

export default Experience;