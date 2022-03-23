import styled from "styled-components";
import { HandWrittenH1 } from "../components/Handwritten";
import ImageWithShadow from "../components/BackgroundImageWithShadow";
import BlockContainer from "./BlockContainer";

const H1 = styled(HandWrittenH1)`
text-align: start;
`;

const PortfolioIntro = () => {
  return (
    <>
      <BlockContainer>
        <ImageWithShadow img="images/working.jpg" height="260px" />
        <H1>
          Portfolio
        </H1>
        <p>
          Lorem ipsum, Lorem ipsum, Lorem ipsum,
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem
          ipsumLorem ipsumvvLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumvv.
        </p>
      </BlockContainer>
    </>
  );
};

export default PortfolioIntro;