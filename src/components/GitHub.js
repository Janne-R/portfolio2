import styled from "styled-components";
import StyledALink from "./StyledALink";
import BlockContainer from "./BlockContainer";

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
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

const GitHub = () => {
  return (
    <Div>
      <BlockContainer>
        <H2>
          GitHub Account
        </H2>
        <p>Take a look at all my code on GitHub.</p>
        <Link href="https://github.com/Janne-R">GitHub</Link>
      </BlockContainer>
    </Div>
  );
};

export default GitHub;