import styled from "styled-components";
import { HandWrittenH2 } from "./Handwritten";
import BlockContainer from "./BlockContainer";
import Numbers from "./Numbers";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};

@media ${({ theme }) => theme.devices.laptopS} { 
  margin-top: 125px;
}
`;

const H2 = styled(HandWrittenH2)`
text-align: start;
`;

const Education = () => {
  return (
    <Container>
      <BlockContainer>
        <H2>Education</H2>
        <div>
          <Numbers>01</Numbers>
          <p>Lorem ipsum, Lorem ipsum, Lorem ipsum,
            Lorem ipsum Lorem ipsum Lorem ipsum,
            Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </div>
        <div>
          <Numbers>02</Numbers>
          <p>Lorem ipsum, Lorem ipsum, Lorem ipsum,
            Lorem ipsum Lorem ipsum Lorem ipsum,
            Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </div>
        <div>
          <Numbers>03</Numbers>
          <p>Lorem ipsum, Lorem ipsum, Lorem ipsum,
            Lorem ipsum Lorem ipsum Lorem ipsum,
            Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </div>

      </BlockContainer>
    </Container>
  );
};

export default Education;