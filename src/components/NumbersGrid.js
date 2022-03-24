import styled from "styled-components";
import Numbers from "./Numbers";

const P = styled.p`
    margin-top: 0;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
    margin-bottom: 25px;

`;

const NumbersGrid = (props) => {
  return (
    <Grid>
      <Numbers>{props.number}</Numbers>
      <P>{props.p}</P>
    </Grid>
  );
};

export default NumbersGrid;



