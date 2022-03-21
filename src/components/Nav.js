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
display: ${(props) => props.showMenu ? "block" : "none"};
list-style-type: none;
`;

const Li = styled.li`
margin-bottom: 10px;
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
            <Li>
              Home
            </Li>
            <Li>
              Portfolio
            </Li>
            <Li>
              About
            </Li>
            <Li>
              Contact
            </Li>
          </Ul>
        </Container>
      </Div>
      <P>Front end developer</P>
    </nav>
  );
};

export default Nav;