import styled from "styled-components";
import { HandWrittenH1 } from "../components/Handwritten";
import ImageWithShadow from "../components/BackgroundImageWithShadow";
import BlockContainer from "./BlockContainer";

const H1 = styled(HandWrittenH1)`
text-align: start;
`;

const Image = styled(ImageWithShadow)`
@media ${({ theme }) => theme.devices.mobileL} { 
  height: 420px;
}

@media ${({ theme }) => theme.devices.tabletS} { 
  height: 360px;
}

@media ${({ theme }) => theme.devices.tabletS} { 
width: 45%;
}
`;

const Container = styled.div`

@media ${({ theme }) => theme.devices.tabletS} { 
  display: flex;
  justify-content: space-between;
}
`;

const DivText = styled.div`

@media ${({ theme }) => theme.devices.tabletS} { 
width: 50%;
}
`;

const PortfolioIntro = () => {
  return (
    <>
      <BlockContainer>
        <Container>

          <Image img="images/workingResize.png" height="260px" />

          <DivText>
            <H1>
              Portfolio
            </H1>
            <p>
              Lorem ipsum, Lorem ipsum, Lorem ipsum,
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
              <p>
                Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem
                ipsumLorem ipsumvvLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumvv.
              </p>
            </p>
          </DivText>
        </Container>
      </BlockContainer>
    </>
  );
};

export default PortfolioIntro;