import styled from "styled-components";
import { HandWrittenH2 } from "../components/Handwritten";
import CenterHeadline from "../components/CenterHeadline";
import BlockContainer from "./BlockContainer";

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.ctaColor};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr;
  grid-column-start: 2;
`;

const GridStart2 = styled.img`
  grid-column-start: 2;
`;

const GridStart3 = styled.img`
  grid-column-start: 3;
`;

const GridStart4 = styled.img`
  grid-column-start: 4;
`;

const ProgrammingTools = () => {
  return (
    <Div>
      <BlockContainer>
        <CenterHeadline>
          <HandWrittenH2>Programming tools</HandWrittenH2>
        </CenterHeadline>
        <Grid>
          <GridStart2 src="images/GitHub_Logo.png" alt="" width="100" />
          <GridStart3 src="images/netlify_logo.png" alt="" width="150" />
        </Grid>
        <Grid>
          <GridStart2 src="images/Xd.svg" alt="" width="150" />
          <GridStart4 src="images/vscode.png" alt="" width="80" />
        </Grid>
      </BlockContainer>
    </Div>

  );
};

export default ProgrammingTools;