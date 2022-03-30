import styled from "styled-components";
import { HandWrittenH1 } from "../components/Handwritten";
import ImageWithShadow from "../components/BackgroundImageWithShadow";
import BlockContainer from "./BlockContainer";

const Container = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    justify-content: space-between;
  }
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

const DivText = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    width: 50%;
  }
`;

const H1 = styled(HandWrittenH1)`
  text-align: start;
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
              This is my collection of all the projects I have done during my studies at Noroff.
              <p>
                All sites are deployd on Netlify and Github.
              </p>
            </p>
          </DivText>
        </Container>
      </BlockContainer>
    </>
  );
};

export default PortfolioIntro;