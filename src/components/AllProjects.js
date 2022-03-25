import styled from "styled-components";
import Block from "./Block";
import { HandWrittenH2 } from "./Handwritten";
import BlockContainer from "./BlockContainer";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  padding-bottom: 1px;
`;

const H2 = styled(HandWrittenH2)`
  text-align: start;
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
          <Block href="https://compassionate-dubinsky-a5f5e6.netlify.app/" backgroundColor="#B77B58" title="Go to page" headline="Food blog" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
            Lorem ipusm. Lorem ipsum, lorem ipusm. " img="images/foodResize.png" />
          <Block href="https://infallible-edison-9d74c3.netlify.app//" backgroundColor="#B77B58" title="Go to page" headline="Science Museum" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
            Lorem ipusm. Lorem ipsum, lorem ipusm. " img="images/museum.png" />
          <Block href="https://nostalgic-lewin-36004d.netlify.app/" backgroundColor="#B77B58" title="Go to page" headline="Webshop" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
            Lorem ipusm. Lorem ipsum, lorem ipusm. " img="images/shoeResize.png" />
          <Block backgroundColor="#B77B58" title="Go to page" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
            Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/designResize.png" />
          <Block backgroundColor="#B77B58" title="Go to page" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
            Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/designResize.png" />
          <Block backgroundColor="#B77B58" title="Go to page" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
            Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/designResize.png" />
          <Block backgroundColor="#B77B58" title="Go to page" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
            Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/designResize.png" />
          <Block backgroundColor="#B77B58" title="Go to page" headline="Headline project name" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
            Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/designResize.png" />
        </Grid>
      </BlockContainer>
    </Container>
  );
};

export default AllProjects;