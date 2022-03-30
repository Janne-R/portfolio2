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
    > *{
      flex-basis: 0;
      flex-grow: 1;
    }
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
          <Block href="https://compassionate-dubinsky-a5f5e6.netlify.app/" backgroundColor="#B77B58" title="Go to page" headline="Food blog" p="This is my project exam for the first year. The task was to creat a blog site of our choice. I made a blog about easy dinner recipies for the busy family. On this assignmnet I got the grade A." img="images/foodResize.png" />
          <Block href="https://infallible-edison-9d74c3.netlify.app//" backgroundColor="#B77B58" title="Go to page" headline="Science Museum" p="This is my semester project for the first year. The task was to create a website for a sience museum where the core target audience was middle school children (7-15) and families with young children. On this assignmnet I got the grade A." img="images/museum.png" />
          <Block href="https://nostalgic-lewin-36004d.netlify.app/" backgroundColor="#B77B58" title="Go to page" headline="Webshop" p="My very first webpage made initially with only HTML and CSS, but later updated with some JavaScript." img="images/Rainydays.jpg" />
        </Flex>
      </BlockContainer>
    </>
  );
};

export default LatestProjects;