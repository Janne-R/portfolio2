import styled from "styled-components";
import { HandWrittenH2 } from "./Handwritten";
import BlockContainer from "./BlockContainer";
import NumbersGrid from "./NumbersGrid";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiAdobexd } from "react-icons/si";
import { HiSpeakerphone } from "react-icons/hi";

const H2 = styled(HandWrittenH2)`
text-align: start;
`;

const Flex = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 
display: flex;
}

`;

const Experience = () => {
  return (
    <>
      <Flex>
        <BlockContainer>
          <H2>Experience</H2>
          <NumbersGrid number="01" p="Lorem ipsum, Lorem ipsum, Lorem ipsum, 
          Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum  "/>
          <NumbersGrid number="02" p="Lorem ipsum, Lorem ipsum, Lorem ipsum, 
          Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum  "/>
          <NumbersGrid number="03" p="Lorem ipsum, Lorem ipsum, Lorem ipsum, 
          Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum  "/>
        </BlockContainer>
        <div>
          <BlockContainer>
            <H2>Key qualifications</H2>
            <NumbersGrid number=<AiFillHtml5 /> p=" Lorem ipsum, Lorem ipsum, Lorem ipsum,
            Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum  "/>
            <NumbersGrid number=<FaCss3Alt /> p=" Lorem ipsum, Lorem ipsum, Lorem ipsum,
            Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum  "/>
            <NumbersGrid number=<DiJavascript1 /> p=" Lorem ipsum, Lorem ipsum, Lorem ipsum,
            Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum  "/>
            <NumbersGrid number=<HiSpeakerphone /> p=" Lorem ipsum, Lorem ipsum, Lorem ipsum,
            Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum  "/>
            <NumbersGrid number=<SiAdobexd /> p=" Lorem ipsum, Lorem ipsum, Lorem ipsum,
            Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum  "/>
          </BlockContainer>
        </div>
      </Flex>
    </>

  );
};

export default Experience;