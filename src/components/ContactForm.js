import styled from "styled-components";
import BlockContainer from "./BlockContainer";
import Button from "./Button";
import { HandWrittenH2 } from "../components/Handwritten";
import Dots from "./Dots";

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  padding-bottom: 10px;
`;

const H2 = styled(HandWrittenH2)`
    text-align: start;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.devices.tabletS} { 
    width: 80%
  }
  @media ${({ theme }) => theme.devices.laptopS} { 
    width: 70%
  }
`;

const Label = styled.label`
margin-bottom: 10px;
`;

const Input = styled.input`
  border-radius: 10px;
  border: none;
  box-shadow: 0 3px 6px rgba(183, 123, 88);
  padding: 10px;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  border-radius: 10px;
  border: none;
  box-shadow: 0 3px 6px rgba(183, 123, 88);
  padding: 10px;
  margin-bottom: 30px;
`;

const DotGrid = styled.div`
  display: none;
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: grid;
    justify-items: start;
    align-content: stretch;
    justify-content: end;
    align-items: end;
    margin-top: -624px;
    grid-template-rows: 1fr 3fr 2fr 3fr 1fr;
  }
`;

const ContactForm = () => {
  return (
    <Div>
      <BlockContainer>
        <H2>Contact form</H2>
        <form action="https://formsubmit.co/janneringdal@gmail.com" method="POST">
          <Flex>
            <Label for="name">Name</Label>
            <Input type="text" id="name" name="Name" placeholder="Full name" required />
            <Label for="email">Email</Label>
            <Input type="email" id="email" name="email" placeholder="example@mail.com" />
            <Label for="phone">Phone</Label>
            <Input type="tel" id="phone" name="phone" placeholder="xxx xx xxx" />
            <Label for="message">Message </Label>
            <Textarea name="message" id="message" cols="30" rows="10" placeholder="Message" required></Textarea>
          </Flex>
          <Button type="submit">Submit</Button>
        </form>
        <DotGrid>
          <Dots />
        </DotGrid>
      </BlockContainer>
    </Div>
  );
};

export default ContactForm;