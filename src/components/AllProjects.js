import styled from "styled-components";
import Block from "./Block";
import { HandWrittenH2 } from "./Handwritten";
import BlockContainer from "./BlockContainer";

const H2 = styled(HandWrittenH2)`
text-align: start;
`;

const Container = styled.div`
background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
`;

const AllProjects = () => {
  return (
    <Container>
      <BlockContainer>
        <H2>
          All Projects
        </H2>
      </BlockContainer>
      <Block backgroundColor="#B77B58" title="Link" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
    Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/design.jpg" />
      <Block backgroundColor="#B77B58" title="Link" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
    Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/design.jpg" />
      <Block backgroundColor="#B77B58" title="Link" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
    Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/design.jpg" />
      <Block backgroundColor="#B77B58" title="Link" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
    Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/design.jpg" />
      <Block backgroundColor="#B77B58" title="Link" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
    Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/design.jpg" />

    </Container>

  );
};

export default AllProjects;