import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vfmzq99",
        "template_mamea7t",
        ref.current,
        "2p_gZP4dMQ-80ZNvQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section className="bg-black my-24">
      <Container>
        <Left>
          <img
            style={{ width: "600px", height: "600px" }}
            alt="coding"
            src="https://i.pinimg.com/originals/38/db/07/38db0791549a04e0139e90cbdb8a5f32.gif"
          ></img>
        </Left>
        <Right>
          <Form ref={ref} onSubmit={handleSubmit}>
            <h2 className="text-white text-3xl">Get In Touch</h2>
            <Input placeholder="Name" name="name" className="text-black" />
            <Input placeholder="Email" name="email" className="text-black" />
            <TextArea
              placeholder="Write your message"
              name="message"
              className="text-black"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
