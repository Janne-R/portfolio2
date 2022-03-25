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

const Dots = () => {
  return (
    <>
      <DotFullColorPrimary />
      <DotBorderColor />
      <DotFullColorSecondary />
      <DotFullColorPrimary />
      <DotFullColorSecondary />
      <DotFullColorPrimary />
      <DotBorderColor />
      <DotFullColorPrimary />
      <DotFullColorSecondary />
      <DotBorderColor />
    </>
  );
};

export default Dots;

