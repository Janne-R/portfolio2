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
          <Block href="https://compassionate-dubinsky-a5f5e6.netlify.app/" backgroundColor="#B77B58" title="Go to page" headline="Food blog" p="This is my project exam for the first year. The task was to creat a blog site of our choice. I made a blog about easy dinner recipies for the busy family. On this assignmnet I got the grade A." img="images/foodResize.png" />
          <Block href="https://infallible-edison-9d74c3.netlify.app//" backgroundColor="#B77B58" title="Go to page" headline="Science Museum" p="This is my semester project for the first year. The task was to create a website for a sience museum where the core target audience was middle school children (7-15) and families with young children. On this assignmnet I got the grade A." img="images/museum.png" />
          <Block href="https://nostalgic-lewin-36004d.netlify.app/" backgroundColor="#B77B58" title="Go to page" headline="Webshop" p="My very first webpage made initially with only HTML and CSS, but later updated with some JavaScript." img="images/Rainydays.jpg" />
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