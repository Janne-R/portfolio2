import styled from "styled-components";
import HandwrittenHeading from "./HandwrittenHeading";

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  height: 28px;
`;

const Name = styled(HandwrittenHeading)`
text-align: center;
font-size: 26px;
margin: 0;
`;

const P = styled.p`
text-align: center;
margin-top: 5px;
font-family: 'Roboto', sans-serif;
`;


const Nav = () => (
  <>
    <Div>
      <Name>Janne Ringdal</Name>
    </Div>
    <P>Front end developer</P>
  </>
);

export default Nav;