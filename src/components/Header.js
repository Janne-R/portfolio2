import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";

const HeroImg = styled(BackgroundImage)`
    position: relative;
    width: 100vw;
    left: 50%;
    margin-left: -50vw;
    margin-top: -10px;
    
    @media ${({ theme }) => theme.devices.mobileL}{
      height: 360px;
    }

    @media ${({ theme }) => theme.devices.tabletS}{
      height: 460px;
    }

    @media ${({ theme }) => theme.devices.tabletL}{
      height: 560px;
    }

    @media ${({ theme }) => theme.devices.laptopS}{
      height: 660px;
    }

    `;

const Header = () => (
  <HeroImg img={"images/headerNew.png"} height={"260px"} />
);

export default Header;