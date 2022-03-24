import styled from "styled-components";

const Numbers = styled.p`
  margin: -5px 0;
  font-family: 'Kalam', cursive;
  font-size: xxx-large;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.ctaColor}
`;

export default Numbers;