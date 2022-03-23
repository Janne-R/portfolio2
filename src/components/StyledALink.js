import styled from "styled-components";

const A = styled.a`
display: inline-block;
text-decoration: none;
text-align: center;
background-color: ${({ theme }) => theme.colors.ctaColor};
color: ${({ theme }) => theme.colors.light};
border: none;
padding: 10px;
width: ${props => props.width};
font-size: 16px;
margin-bottom: 25px;
`

export default A;