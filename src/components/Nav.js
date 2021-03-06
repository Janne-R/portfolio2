import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HandWrittenP } from "./Handwritten";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const BackgroundColor = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
`;

const Div = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 32px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

const BurgerMenu = styled(HiOutlineMenuAlt1)`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: none;
  }
`;

const Ul = styled.ul`
  display: ${(props) => props.showMenu ? "flex" : "none"};
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  width: 20%;
  margin-top: 32px;
  list-style-type: none;
  flex-direction: column;
  padding-left: 5px;
  position: absolute;
  li {
    margin-bottom: 10px;
    a{
      text-decoration: none;
      color: ${({ theme }) => theme.colors.dark};
      font-family: 'Roboto', sans-serif;
    }
  }
  @media ${({ theme }) => theme.devices.tabletS} { 
    background-color: transparent;
    width: auto;;
    display: flex;
    flex-direction: row;
    position: unset;
    margin-top:0;
    justify-content: space-between;
    padding: 5px 10px;
      li {
        margin-bottom: 0;
      }
  }
`;

const Name = styled(HandWrittenP)`
  text-align: center;
  font-size: 32px;
  margin: 0;
  grid-column-start: 2;
`;


const UlSecond = styled(Ul)`
    margin-top: 96px;
    @media ${({ theme }) => theme.devices.tabletS} { 
      margin-top:0;
    }
`;

const P = styled.p`
  text-align: center;
  margin-top: 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  margin-bottom: 30px;
`;

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <BackgroundColor>
        <Div>
          <BurgerMenu size="2rem" onClick={() => setShowMenu(!showMenu)} />
          <Ul showMenu={showMenu}>
            <li>
              <NavLink exact to="/" style={({ isActive }) =>
                (isActive ? { color: '#B77B58' } : { color: 'black' })}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" style={({ isActive }) =>
                (isActive ? { color: '#B77B58' } : { color: 'black' })}>
                Portfolio
              </NavLink>
            </li>
          </Ul>
          <Name>Janne Ringdal</Name>
          <UlSecond showMenu={showMenu}>
            <li>
              <NavLink to="/about" style={({ isActive }) =>
                (isActive ? { color: '#B77B58' } : { color: 'black' })}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={({ isActive }) =>
                (isActive ? { color: '#B77B58' } : { color: 'black' })}>
                Contact
              </NavLink>
            </li>
          </UlSecond>
        </Div>
      </BackgroundColor>
      <P>Front end developer</P>
    </nav>
  );
};

export default Nav;