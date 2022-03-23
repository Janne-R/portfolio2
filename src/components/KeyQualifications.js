import styled from "styled-components";
import { HandWrittenP } from "../components/Handwritten";
import Block from "./Block";
import CenterHeadline from "../components/CenterHeadline";

const H2 = styled.h2`
margin-top: -18px;
`;

const Flex = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 
  display: flex;
}
`;

const H3 = styled.h3`
display: none;

@media ${({ theme }) => theme.devices.tabletS} { 
  display: block;
  margin: -20px 0;
  font-family: 'Kalam', cursive;
  font-size: xxx-large;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.ctaColor}
}
`;

const KeyQualifications = () => {
  return (
    <>
      <CenterHeadline>
        <HandWrittenP>Some of mine</HandWrittenP>
        <H2>Key qualifications</H2>
      </CenterHeadline>
      <Flex>
        <div>
          <H3>01</H3>
          <Block backgroundColor="black" title="HTML" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
          Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/html.jpg" />
        </div>
        <div>
          <H3>02</H3>
          <Block backgroundColor="black" title="CSS" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
          Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/css.jpg" />
        </div>
        <div>
          <H3>03</H3>
          <Block backgroundColor="black" title="JavaScript" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
          Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/js.jpg" />
        </div>
      </Flex>
    </>
  );
};

export default KeyQualifications;
