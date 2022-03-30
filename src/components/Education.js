import styled from "styled-components";
import { HandWrittenH2 } from "./Handwritten";
import BlockContainer from "./BlockContainer";
import NumbersGrid from "./NumbersGrid";
import ImageWithShadow from "../components/BackgroundImageWithShadow";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  padding-bottom: 25px;
  @media ${({ theme }) => theme.devices.laptopS} { 
    margin-top: 125px;
  }
`;

const Flex = styled(BlockContainer)`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
  }
`;

const H2 = styled(HandWrittenH2)`
  text-align: start;
`;

const Image = styled(ImageWithShadow)`
  height: 360px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    width: 80%;
    height: 460px;
    margin-top: -30px;
  }
  @media ${({ theme }) => theme.devices.laptopS} { 
    width: 60%;
    margin-left: 10px;
  }
`;

const Education = () => {
  return (
    <Container>
      <Flex>
        <div>
          <H2>Education</H2>
          <NumbersGrid number="01" p="School: Kristiania University College - 2008-2011." p2="Degree: Bachelor - Marketing and Advertising." />
          <NumbersGrid number="02" p="School: High school - 2002-2005." p2="Field of study: general subject and marketing. " />
          <NumbersGrid number="03" p="Lorem ipsum, Lorem ipsum, Lorem ipsum, 
          Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum  "/>
        </div>
        <Image img="images/designResize.png" height="260px" />
      </Flex>
    </Container>
  );
};

export default Education;