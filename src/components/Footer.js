import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HandWrittenH3 } from "./Handwritten";

const Ul = styled.ul`
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
`;

const CopyRight = styled.div`
background-color: ${({ theme }) => theme.colors.ctaColor};
color: ${({ theme }) => theme.colors.light};
text-align: center;
padding: 16px;
`;

const Footer = () => {
  return (
    <>
      <Ul>
        <HandWrittenH3>Navigation</HandWrittenH3>
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
        <HandWrittenH3>Links</HandWrittenH3>
        <li>
          <a href="http://www.linkedin.com/in/janneringdal">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/Janne-R">GitHub</a>
        </li>
      </Ul>
      <CopyRight>Copyright ©Janne Ringdal</CopyRight>
    </>
  );
};

export default Footer;