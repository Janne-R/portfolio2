import { useState } from "react";
import styled from "styled-components";
import HandwrittenHeading from "./HandwrittenHeading";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  height: 32px;
  display: grid;
    grid-template-columns: 1fr 2fr 1fr;
`;

const Name = styled(HandwrittenHeading)`
text-align: center;
font-size: 32px;
margin: 0;
grid-column-start: 2;
`;

const P = styled.p`
text-align: center;
margin-top: 5px;
font-family: 'Roboto', sans-serif;
`;

const BurgerMenu = styled(HiOutlineMenuAlt1)`
@media ${({ theme }) => theme.devices.tabletS} { 
  display: none;
}
`;

const Ul = styled.ul`
display: ${(props) => props.showMenu ? "flex" : "none"};
list-style-type: none;
flex-direction: column;
padding-right: 10px;
position: absolute;
right:0;
margin-top:30px;

li {
  margin-bottom: 10px;
}

@media ${({ theme }) => theme.devices.tabletS} { 
  display: flex;
  flex-direction: row;
  position: unset;
  margin-top:0;
  li {
  margin-bottom: 0;
}
}
`;

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <Div>
        <Name>Janne Ringdal</Name>
        <Container>
          <BurgerMenu size="2rem" onClick={() => setShowMenu(!showMenu)} />
          <Ul showMenu={showMenu}>
            <li>
              Home
            </li>
            <li>
              Portfolio
            </li>
            <li>
              About
            </li>
            <li>
              Contact
            </li>
          </Ul>
        </Container>
      </Div>
      <P>Front end developer</P>
    </nav>
  );
};

export default Nav;