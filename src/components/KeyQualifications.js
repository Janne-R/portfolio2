import styled from "styled-components";
import { HandWrittenP } from "../components/Handwritten";
import Block from "./Block";

const Headline = styled.div`
text-align: center;
`;

const H1 = styled.h1`
margin-top: -18px;
`;

const KeyQualifications = () => {
  return (
    <>
      <Headline>
        <HandWrittenP>Some of mine</HandWrittenP>
        <H1>Latest projects</H1>
      </Headline>
      <Block title="HTML" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/html.jpg" />
      <Block title="CSS" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/css.jpg" />
      <Block title="JavaScript" p="Lorem ipusn, lorem ipusm, Lorem ipsum 
Lorem ipusm. Lorem ipsum, lorem ipusm." img="images/js.jpg" />
    </>
  );
};

export default KeyQualifications;
