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
          <Block href="https://compassionate-dubinsky-a5f5e6.netlify.app/" backgroundColor="#B77B58" title="Go to page" headline="Food blog" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
          Lorem ipusm. Lorem ipsum, lorem ipusm. " img="images/foodResize.png" />
          <Block href="https://infallible-edison-9d74c3.netlify.app//" backgroundColor="#B77B58" title="Go to page" headline="Science Museum" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
          Lorem ipusm. Lorem ipsum, lorem ipusm. " img="images/museum.png" />
          <Block href="https://nostalgic-lewin-36004d.netlify.app/" backgroundColor="#B77B58" title="Go to page" headline="Webshop" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
          Lorem ipusm. Lorem ipsum, lorem ipusm. " img="images/shoeResize.png" />
        </Flex>
      </BlockContainer>
    </>
  );
};

export default LatestProjects;