import styled from "styled-components";
import Block from "./Block";
import { HandWrittenH2 } from "./Handwritten";
import BlockContainer from "./BlockContainer";

const H2 = styled(HandWrittenH2)`
text-align: start;
`;

const Container = styled.div`
background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
padding-bottom: 1px;
`;

const Grid = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 
  display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
`;

const AllProjects = () => {
  return (
    <Container>
      <BlockContainer>
        <H2>
          All Projects
        </H2>

        <Grid>
          <Block backgroundColor="#B77B58" title="Link" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
    Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/designResize.png" />
          <Block backgroundColor="#B77B58" title="Link" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
    Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/designResize.png" />
          <Block backgroundColor="#B77B58" title="Link" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
    Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/designResize.png" />
          <Block backgroundColor="#B77B58" title="Link" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
    Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/designResize.png" />
          <Block backgroundColor="#B77B58" title="Link" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
    Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/designResize.png" />
        </Grid>
      </BlockContainer>
    </Container>

  );
};

export default AllProjects;