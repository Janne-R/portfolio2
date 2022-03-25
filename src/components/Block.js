import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";
import BlockContainer from "./BlockContainer";
import { HandWrittenH3 } from "../components/Handwritten";

const ProjectTitle = styled.div`
background-color: ${props => props.backgroundColor};
width: 70%;
margin: auto;
margin-top: -40px;
`;

const P = styled.p`
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

const H3 = styled(HandWrittenH3)`
text-align:start;
`;

const A = styled.a`
text-decoration: none;
color: ${({ theme }) => theme.colors.dark};
`;

const Block = (props) => {
  return (
    <A href={props.href}>
      <BlockContainer>
        <BgImg img={props.img} height={"260px"} />
        <ProjectTitle backgroundColor={props.backgroundColor}>
          <P>
            {props.title}
          </P>
        </ProjectTitle>
        <H3>
          {props.headline}
        </H3>
        <p>{props.p} </p>
      </BlockContainer>
    </A>
  );
};

export default Block;