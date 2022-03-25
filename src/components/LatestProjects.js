import styled from "styled-components";
import { HandWrittenP } from "../components/Handwritten";
import Block from "./Block";
import CenterHeadline from "../components/CenterHeadline";
import BlockContainer from "./BlockContainer";

const H1 = styled.h1`
margin-top: -18px;
`;

const Flex = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 
  display: flex;
}
`;

const LatestProjects = () => {
  return (
    <>
      <BlockContainer>
        <CenterHeadline>
          <HandWrittenP>Some of mine</HandWrittenP>
          <H1>Latest projects</H1>
        </CenterHeadline>
        <Flex>
          <Block backgroundColor="black" title="Food Blog" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
          Lorem ipusm. Lorem ipsum, lorem ipusm. " img="images/food.jpg" />
          <Block backgroundColor="black" title="Webshop" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
          Lorem ipusm. Lorem ipsum, lorem ipusm. " img="images/shop.jpg" />
          <Block backgroundColor="black" title="Exam" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
          Lorem ipusm. Lorem ipsum, lorem ipusm. " img="images/shoe.jpg" />
        </Flex>
      </BlockContainer>
    </>
  );
};

export default LatestProjects;