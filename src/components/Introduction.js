import styled from "styled-components";
import { HandWrittenH2 } from "./Handwritten";
import BackgroundImage from "./BackgroundImage";
import StyledALink from "./StyledALink";

const Block = styled.div`
background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
`;

const Link = styled(StyledALink)`
@media ${({ theme }) => theme.devices.tabletS} { 
width: 30%;
margin-top: 25px;
}
`;

const H2 = styled(HandWrittenH2)`
@media ${({ theme }) => theme.devices.tabletS} { 
text-align: start;
padding-top: 30px;
}
`;

const Image = styled(BackgroundImage)`
  margin: 0px 10px 40px 10px;
  transform: rotate(-3deg);
  box-shadow: 0 3px 6px rgba(183, 123, 88);
  
  @media ${({ theme }) => theme.devices.mobileL} { 
  height: 340px;
}

@media ${({ theme }) => theme.devices.tabletS} { 
  transform: rotate(0deg);
  margin-top:-135px;
}
`;

const ImageTablet = styled(Image)`
display: none;
@media ${({ theme }) => theme.devices.tabletS} { 
display: block;
height: 210px;
margin-top: -115px;
margin-left: -60px;
width: 60%;
}
`;

const Div = styled.div`
margin: 0px 10px 40px 10px;
`;

const FlexTablet = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 
display: flex;
flex-direction: row-reverse;
justify-content:space-between;
}
`;

const ImageDiv = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 
width: 40%;
}
`;

const ParagraphDiv = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 
width: 50%;
}
`;

const Introduction = () => {
  return (
    <Block>
      <Div>
        <H2>Hi! I´m Janne Ringdal</H2>
        <FlexTablet>
          <ImageDiv>
            <Image img={"images/girl.jpg"} height={"260px"} />
            <ImageTablet img={"images/girlComputer.jpg"} />
          </ImageDiv>
          <ParagraphDiv>
            <div>
              <p>
                Lorem ipsum, Lorem ipsum, Lorem ipsum,
                Lorem ipsum Lorem ipsum Lorem ipsum.
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum,
                Lorem ipsum Lorem ipsum.
              </p>
              <p>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum,
                Lorem ipsum Lorem ipsum.
                Lorem ipsum, Lorem ipsum, Lorem ipsum,
                Lorem ipsum Lorem ipsum Lorem ipsum,
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum,
                Lorem ipsum Lorem ipsum.
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum,
                Lorem ipsum Lorem ipsum.
                Lorem ipsum, Lorem ipsum, Lorem ipsum,
                Lorem ipsum Lorem ipsum Lorem ipsum,
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum,
                Lorem ipsum Lorem ipsum.
              </p>
            </div>
            <Link width={"50%"}>Learn more </Link>
          </ParagraphDiv>
        </FlexTablet>

      </Div>
    </Block>


  );
};

export default Introduction;