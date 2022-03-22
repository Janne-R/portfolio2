import styled from "styled-components";
import HandwrittenHeading from "../components/HandwrittenHeading";
import BackgroundImage from "./BackgroundImage";

const Headline = styled.div`
text-align: center;
`;

const H1 = styled.h1`
margin-top: -18px;
`;

const Block = styled.div`
margin:0px 10px 40px 10px;
`;

const ProjectTitle = styled.div`
background-color: ${({ theme }) => theme.colors.dark};
width: 70%;
margin: auto;
margin-top: -40px;
`;

const H2 = styled.h2`
text-align: center;
color: ${({ theme }) => theme.colors.light};
padding: 10px;
`;

const LatestProjects = () => {
  return (
    <>
      <Headline>
        <HandwrittenHeading>Some of mine</HandwrittenHeading>
        <H1>Latest projects</H1>
      </Headline>
      <Block>
        <BackgroundImage img={"images/food.jpg"} height={"260px"} />
        <ProjectTitle>
          <H2>
            Food blog
          </H2>
        </ProjectTitle>
        <p>Lorem ipusn, lorem ipusm, Lorem ipsum
          Lorem ipusm. Lorem ipsum, lorem ipusm. </p>
      </Block>
      <Block>
        <BackgroundImage img={"images/shop.jpg"} height={"260px"} />
        <ProjectTitle>
          <H2>
            Webshop
          </H2>
        </ProjectTitle>
        <p>Lorem ipusn, lorem ipusm, Lorem ipsum
          Lorem ipusm. Lorem ipsum, lorem ipusm. </p>
      </Block>
      <Block>
        <BackgroundImage img={"images/shoe.jpg"} height={"260px"} />
        <ProjectTitle>
          <H2>
            Exam
          </H2>
        </ProjectTitle>
        <p>Lorem ipusn, lorem ipusm, Lorem ipsum
          Lorem ipusm. Lorem ipsum, lorem ipusm. </p>
      </Block>
    </>
  );
};

export default LatestProjects;