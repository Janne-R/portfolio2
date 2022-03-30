import styled from "styled-components";
import Numbers from "./Numbers";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  margin-bottom: 25px;
`;

const P = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
`;

const NumbersGrid = (props) => {
  return (
    <Grid>
      <Numbers>{props.number}</Numbers>
      <div>
        <P>{props.p}</P>
        <P>{props.p2}</P>
      </div>
    </Grid>
  );
};

export default NumbersGrid;