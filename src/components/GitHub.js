import styled from "styled-components";
import StyledALink from "./StyledALink";
import BlockContainer from "./BlockContainer";

const Div = styled.div`
background-color: ${({ theme }) => theme.colors.dark};
color: ${({ theme }) => theme.colors.light};
text-align: center;
display: inline-block;
`;

const H2 = styled.h2`
    margin-top: 0;
    padding-top: 20px;
`;

const Link = styled(StyledALink)`
width: 50%;

@media ${({ theme }) => theme.devices.tabletS} { 
width: 20%
}
`;

const Container = styled(BlockContainer)`
@media ${({ theme }) => theme.devices.tabletS} { 
  max-width: 50%;
  margin: 0 auto;
}

`;

const GitHub = () => {
  return (
    <Div>
      <Container>
        <H2>
          GitHub Account
        </H2>
        <p>Lorem ipusn, lorem ipusm, Lorem ipsum, Lorem ipusm.
          Lorem ipsum, lorem ipusm. Lorem ipusn, lorem ipusm,
          Lorem ipsum, Lorem ipusm.</p>
        <Link>Github</Link>
      </Container>
    </Div>
  );
};

export default GitHub;