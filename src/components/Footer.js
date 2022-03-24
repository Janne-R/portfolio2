import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HandWrittenH3, HandWrittenP } from "./Handwritten";

const Div = styled.div`
background-color: #E4E4E4;
`;

const Ul = styled.ul`
margin: 0;
padding-bottom: 10px;
text-align: center;
list-style-type: none;
padding-left: 0;

li {
  margin-bottom: 10px;
}

a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
  }

  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    justify-content: space-around;
  }
`;

const Title = styled(HandWrittenH3)`
font-weight: bolder;
margin-top:0;
padding-top: 10px;
`;

const Name = styled(HandWrittenP)`
font-size: 28px;
font-weight: bolder;
margin-bottom: 0;
`;

const P = styled.p`
margin-top: 0;
`;

const CopyRight = styled.div`
background-color: ${({ theme }) => theme.colors.ctaColor};
color: ${({ theme }) => theme.colors.light};
text-align: center;
padding: 16px;
`;

const TabletDiv = styled.div`
  display: none;
  
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: block;
  }

`;

const Footer = () => {
  return (
    <>
      <Div>
        <Ul>
          <div>
            <Title>Navigation</Title>
            <li>
              <NavLink exact to="/" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" >
                Contact
              </NavLink>
            </li>
          </div>
          <TabletDiv>
            <Name>Janne Ringdal</Name>
            <P>Front end developer</P>
          </TabletDiv>
          <div>
            <Title>Links</Title>
            <li>
              <a href="http://www.linkedin.com/in/janneringdal">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/Janne-R">GitHub</a>
            </li>
          </div>
        </Ul>
      </Div>
      <CopyRight>Copyright ©Janne Ringdal</CopyRight>
    </>
  );
};

export default Footer;