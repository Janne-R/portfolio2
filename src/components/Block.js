import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";

const Container = styled.div`
margin:0px 10px 40px 10px;
`;

const ProjectTitle = styled.div`
background-color: ${({ theme }) => theme.colors.dark};
width: 70%;
margin: auto;
margin-top: -40px;
`;

const H3 = styled.h2`
text-align: center;
color: ${({ theme }) => theme.colors.light};
padding: 10px;
`;

const BgImg = styled(BackgroundImage)`
@media ${({ theme }) => theme.devices.mobileL} { 
  height: 420px;
}

@media ${({ theme }) => theme.devices.tabletS} { 
  height: 260px;
}
`;


const Block = (props) => {
  return (
    <Container>
      <BgImg img={props.img} height={"260px"} />
      <ProjectTitle>
        <H3>
          {props.title}
        </H3>
      </ProjectTitle>
      <p>{props.p} </p>
    </Container>
  );
};

export default Block;