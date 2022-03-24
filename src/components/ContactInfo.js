import styled from "styled-components";
import { HandWrittenH1 } from "../components/Handwritten";
import BlockContainer from "./BlockContainer";
import NumbersGrid from "./NumbersGrid";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaMapMarker } from "react-icons/fa";



const H1 = styled(HandWrittenH1)`
text-align: start;
`;

const Flex = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 

  display: flex;
    flex-direction: row-reverse;
}
`;

const Image = styled.img`
@media ${({ theme }) => theme.devices.tabletS} { 
  width: 45%;
    align-self: self-end;
}
`;

const Div = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 
width: 45%;
}
`;

const ContactInfo = () => {
  return (
    <>
      <BlockContainer>
        <Flex>
          <Image src="images/contact.svg" height="260px" width="100%" />
          <Div>
            <H1>Contact info</H1>
            <NumbersGrid number=<AiFillPhone /> p=" +47 412 09 616"/>
            <NumbersGrid number=<MdEmail /> p=" janneringdal@gmail.com"/>
            <NumbersGrid number=<FaMapMarker /> p=" Rådalslien 9,
            5239 Bergen, Norway."/>
          </Div>
        </Flex>
      </BlockContainer>
    </>
  );
};

export default ContactInfo;