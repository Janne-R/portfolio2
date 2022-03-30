import styled from "styled-components";
import { HandWrittenP } from "../components/Handwritten";
import Block from "./Block";
import CenterHeadline from "../components/CenterHeadline";
import Numbers from "./Numbers";
import BlockContainer from "./BlockContainer";

const H2 = styled.h2`
  margin-top: -18px;
`;

const Flex = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    > *{
      flex-basis: 0;
      flex-grow: 1;
    }
  }
`;

const Number = styled(Numbers)`
  display: none;
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: block;
  }
`;

const KeyQualifications = () => {
  return (
    <>
      <BlockContainer>
        <CenterHeadline>
          <HandWrittenP>Some of mine</HandWrittenP>
          <H2>Key qualifications</H2>
        </CenterHeadline>
        <Flex>
          <div>
            <Number>01</Number>
            <Block backgroundColor="black" title="HTML" p="Good HTML knowledge with focus on semantic markup and SEO optimization." img="images/htmlResize.png" />
          </div>
          <div>
            <Number>02</Number>
            <Block backgroundColor="black" title="CSS" p="Good CSS knowledge and creating cross browser CSS designs. Implementing style standards and guides. Basic knowledge in CSS frameworks like Bootstrap, Sass and Tailwind. More advanced knowlede in Styled Components." img="images/cssResize.png" />
          </div>
          <div>
            <Number>03</Number>
            <Block backgroundColor="black" title="JavaScript" p="Basic javaScript knowledge. Can design, build, and maintain web sites, using React.js." img="images/jsResize.png" />
          </div>
        </Flex>
      </BlockContainer>
    </>
  );
};

export default KeyQualifications;