import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";

const ImageWithShadow = styled(BackgroundImage)`
  box-shadow: 0 3px 6px rgba(183, 123, 88);
  
  @media ${({ theme }) => theme.devices.mobileL} { 
  height: 340px;
}
`

export default ImageWithShadow;