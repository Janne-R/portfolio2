import styled from "styled-components";
import { HandWrittenH2 } from "./Handwritten";
import BlockContainer from "./BlockContainer";
import NumbersGrid from "./NumbersGrid";

const H2 = styled(HandWrittenH2)`
text-align: start;
`;


const Experience = () => {
  return (
    <BlockContainer>
      <H2>Experience</H2>
      <NumbersGrid number="01" p="Lorem ipsum, Lorem ipsum, Lorem ipsum, 
          Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum  "/>
      <NumbersGrid number="02" p="Lorem ipsum, Lorem ipsum, Lorem ipsum, 
          Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum  "/>
      <NumbersGrid number="03" p="Lorem ipsum, Lorem ipsum, Lorem ipsum, 
          Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum  "/>
      <H2>Key qualifications</H2>
    </BlockContainer>
  );
};

export default Experience;