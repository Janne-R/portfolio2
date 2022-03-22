import styled from "styled-components";

const Button = styled.button`
background-color: ${({ theme }) => theme.colors.ctaColor};
color: ${({ theme }) => theme.colors.light};
border: none;
padding: 10px;
width: ${props => props.width};
font-size: 16px;
min-width: 30%;
`

export default Button;