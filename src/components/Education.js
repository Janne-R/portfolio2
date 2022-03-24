import styled from "styled-components";
import { HandWrittenH2 } from "./Handwritten";
import BlockContainer from "./BlockContainer";
import Numbers from "./Numbers";
import ImageWithShadow from "../components/BackgroundImageWithShadow";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};

@media ${({ theme }) => theme.devices.laptopS} { 
  margin-top: 125px;
}
`;

const H2 = styled(HandWrittenH2)`
text-align: start;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
    margin-bottom: 25px;

`;

const P = styled.p`
    margin-top: 0;
`;


const Image = styled(ImageWithShadow)`
  height: 360px;

  @media ${({ theme }) => theme.devices.tabletS} { 
  width: 80%;
  height: 460px;
  margin-top: -30px;
}
`;

const Flex = styled(BlockContainer)`

@media ${({ theme }) => theme.devices.tabletS} { 
  display: flex;
}
`;

const Education = () => {
  return (
    <Container>
      <Flex>
        <div>
          <H2>Education</H2>
          <Grid>
            <Numbers>01</Numbers>
            <P>Lorem ipsum, Lorem ipsum, Lorem ipsum,
              Lorem ipsum Lorem ipsum Lorem ipsum,
              Lorem ipsum Lorem ipsum Lorem ipsum
            </P>
          </Grid>
          <Grid>
            <Numbers>02</Numbers>
            <P>Lorem ipsum, Lorem ipsum, Lorem ipsum,
              Lorem ipsum Lorem ipsum Lorem ipsum,
              Lorem ipsum Lorem ipsum Lorem ipsum
            </P>
          </Grid>
          <Grid>
            <Numbers>03</Numbers>
            <P>Lorem ipsum, Lorem ipsum, Lorem ipsum,
              Lorem ipsum Lorem ipsum Lorem ipsum,
              Lorem ipsum Lorem ipsum Lorem ipsum
            </P>
          </Grid>
        </div>
        <Image img="images/design.jpg" height="260px" />
      </Flex>
    </Container>
  );
};

export default Education;