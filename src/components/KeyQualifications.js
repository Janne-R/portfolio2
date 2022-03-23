import styled from "styled-components";
import { HandWrittenP } from "../components/Handwritten";
import Block from "./Block";
import CenterHeadline from "../components/CenterHeadline";

const H2 = styled.h2`
margin-top: -18px;
`;

const KeyQualifications = () => {
  return (
    <>
      <CenterHeadline>
        <HandWrittenP>Some of mine</HandWrittenP>
        <H2>Key qualifications</H2>
      </CenterHeadline>
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
