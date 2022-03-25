import styled from "styled-components";
import { HandWrittenH1 } from "../components/Handwritten";
import ImageWithShadow from "../components/BackgroundImageWithShadow";
import BlockContainer from "./BlockContainer";
import StyledALink from "./StyledALink"; // SKJEKK DENNE!
import { NavLink } from "react-router-dom";

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

const ImageTablet = styled(Image)`
  display: none;
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: block;
    height: 240px;
    margin-top: 225px;
    margin-left: -245px;
    width: 30%;
  }
  @media ${({ theme }) => theme.devices.laptopS} { 
    margin-left: -310px;
    height: 305px;
  }
`;

const DivText = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    width: 48%;
  }
  @media ${({ theme }) => theme.devices.laptopS} { 
    width: 45%;
  }
`;

const H1 = styled(HandWrittenH1)`
  text-align: start;
`;

const DivALinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    justify-content: flex-end;
  }
  @media ${({ theme }) => theme.devices.laptopS} { 
    margin-top:-90px;
  }
`;

const ALinks = styled(NavLink)`
  width: 40%;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.ctaColor};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 10px;
  width: ${props => props.width};
  font-size: 16px;
  margin-bottom: 25px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    width: 20%;
    margin-top: -67px;

    :first-child{
      margin-right: 20px;
    }
  }
`;

const AboutMeIntro = () => {
  return (
    <>
      <BlockContainer>
        <Container>
          <Image img="images/girl2Resize.png" height="260px" />
          <ImageTablet img={"images/quote1.png"} />
          <DivText>
            <H1>
              About me
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
        <DivALinks>
          <ALinks to="/contact" >
            Contact
          </ALinks>
          <ALinks to="/portfolio" >
            Portfolio
          </ALinks>
        </DivALinks>
      </BlockContainer>
    </>
  );
};

export default AboutMeIntro;