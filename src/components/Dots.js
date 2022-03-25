import styled from "styled-components";

const Dot = styled.span`
 height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`;

const DotFullColorPrimary = styled(Dot)`
background-color: ${({ theme }) => theme.colors.ctaColor};
border: none;
`;

const DotBorderColor = styled(Dot)`
border: 2px solid ${({ theme }) => theme.colors.ctaColor};
background-color: ${({ theme }) => theme.colors.light};;
`;

const DotFullColorSecondary = styled(Dot)`
background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
border: none;
`;

const Grid = styled.div`
    display: grid;
    @media ${({ theme }) => theme.devices.tabletS} { 
    grid-template-columns: 3fr 2fr 3fr 1fr;
    grid-column-start: 2;
    }
    
    @media ${({ theme }) => theme.devices.laptopS} { 
    grid-template-columns: 8fr 4fr 3fr 1fr;
    grid-column-start: 2;
    }
`;

const GridStart3 = styled.div`
    grid-column-start: 3;
`;

const GridStart2 = styled.div`
    grid-column-start: 2;
`;

const GridStart4 = styled.div`
    grid-column-start: 4;
`;

const Dots = () => {
  return (
    <>
      <Grid>
        <GridStart3>
          <DotFullColorPrimary />
        </GridStart3>
        <GridStart2>
          <DotBorderColor />
        </GridStart2>
      </Grid>
      <Grid>
        <GridStart4>
          <DotFullColorSecondary />
        </GridStart4>
        <GridStart2>
          <DotFullColorPrimary />
        </GridStart2>
      </Grid>
      <Grid>
        <GridStart4>
          <DotFullColorPrimary />
        </GridStart4>
        <GridStart2>
          <DotBorderColor />
        </GridStart2>
        <GridStart3>
          <DotFullColorPrimary />
        </GridStart3>
      </Grid>
      <Grid>
        <GridStart4>
          <DotFullColorSecondary />
        </GridStart4>
        <DotBorderColor />
      </Grid>
    </>
  );
};

export default Dots;

