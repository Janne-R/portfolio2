import styled from "styled-components";
import { HandWrittenH2 } from "./Handwritten";
import BackgroundImage from "./BackgroundImage";
import StyledALink from "./StyledALink";

const Block = styled.div`
background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
`;

const H2 = styled(HandWrittenH2)`
text-align: center;
padding-top: 20px;
`;

const Image = styled(BackgroundImage)`
  margin: 0px 10px 40px 10px;
  transform: rotate(-3deg);
  box-shadow: 0 3px 6px rgba(183, 123, 88);;
`;

const Div = styled.div`
margin: 0px 10px 40px 10px;
`;



const Introduction = () => {
  return (
    <Block>
      <Div>
        <H2>Hi! I´m Janne Ringdal</H2>
        <Image img={"images/girl.jpg"} height={"260px"} />
        <p>
          Lorem ipsum, Lorem ipsum, Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum,
          Lorem ipsum Lorem ipsum.
        </p>
        <StyledALink width={"50%"}>Learn more </StyledALink>
      </Div>
    </Block>


  );
};

export default Introduction;