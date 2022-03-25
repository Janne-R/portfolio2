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
            <Block backgroundColor="black" title="HTML" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
          Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/html.jpg" />
          </div>
          <div>
            <Number>02</Number>
            <Block backgroundColor="black" title="CSS" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
          Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/css.jpg" />
          </div>
          <div>
            <Number>03</Number>
            <Block backgroundColor="black" title="JavaScript" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
          Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/js.jpg" />
          </div>
        </Flex>
      </BlockContainer>
    </>
  );
};

export default KeyQualifications;
