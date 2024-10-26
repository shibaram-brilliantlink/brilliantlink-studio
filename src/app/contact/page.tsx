"use client";
import { FaPaperPlane } from "react-icons/fa";
import { formData, formErrors } from "@/lib/types";
import Link from "next/link";
import styled from "styled-components";
import useFormValidate from "@/lib/useFormValidate";

export default function ContactPage() {
  const { data, errors, handleSubmit, handleChange } =
    useFormValidate(submitForm);

  function submitForm(): formData {
    console.log("Data is submitted", data);
    return data;
  }
  return (
    <Wrapper>
      <InsideWrapper>
        <WelcomeMessage>
          <h1>Let's Connect</h1>
        </WelcomeMessage>
        <hr />
        <MainSection>
          <ContactAddress>
            <TextContainer>
              <DimmedTextTitle>Address</DimmedTextTitle>
              <p>Surat, Gujarat, India</p>
            </TextContainer>
            <TextContainer>
              <DimmedTextTitle>Phone</DimmedTextTitle>
              <Link href="tel:9409539265">9409539265</Link>
            </TextContainer>
            <TextContainer>
              <DimmedTextTitle>Email</DimmedTextTitle>
              <Link href="mailto:shivram3050@gamil.com">
                shivram3050@gmail.com
              </Link>
            </TextContainer>
          </ContactAddress>
          <ContactFormContainer>
            <FocusedFieldLogo>
              <FaPaperPlane style={{ fontSize: "20px" }} />
            </FocusedFieldLogo>
            <FormWrapper>
              <Contactform action="#" onSubmit={handleSubmit}>
                <h2>Get in Touch!</h2>
                <div>
                  <label htmlFor="fullname">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Enter your fullname"
                    value={data.fullname}
                    onChange={handleChange}
                    name="fullname"
                    // errors={!!errors.fullname}
                  />
                  {errors.fullname && (
                    <ErrorMessage>{errors.fullname}</ErrorMessage>
                  )}
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    placeholder="Enter your email address"
                    value={data.email}
                    onChange={handleChange}
                    name="email"
                    // errors={!!errors?.email}
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <Textarea
                    placeholder="Enter your feedback or  question here"
                    value={data.message}
                    onChange={handleChange}
                    name="message"
                    // errors={!!errors.message}
                  />
                  {errors.message && (
                    <ErrorMessage>{errors.message}</ErrorMessage>
                  )}
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </Contactform>
            </FormWrapper>
          </ContactFormContainer>
        </MainSection>
        <TestDiv id="contact2">Contact page contact2 id div</TestDiv>
      </InsideWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--background);
  display: flex;
  justify-content: center;
`;
const InsideWrapper = styled.div`
  width: 1024px;
  height: 80%;
  padding: 40px;
  hr {
    background-image: linear-gradient(to right, black, white, black);
    border: none;
    /* width: 10px; */
    height: 1px;
    margin-bottom: 30px;
    /* border: 2px solid white; */
  }
  @media (max-width: 425px) {
    padding: 20px;
  }
`;
const MainSection = styled.div`
  display: flex;
  height: 80%;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 90px;
  }
`;
const WelcomeMessage = styled.div`
  line-height: 4;
  h1 {
    font-size: var(--font-large);
    background: linear-gradient(
      to right,
      #505050 0,
      #fff 10%,
      #fff 11%,
      #505050 15%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s infinite linear;
    /* animation-fill-mode: backwords; */
    -webkit-text-size-adjust: none;
    background-position: -90px;
  }
  @keyframes shine {
    0% {
      background-position: -90px;
    }
    50% {
      background-position: 90px;
    }
    100% {
      background-position: 180px;
    }
  }
  @media (max-width: 425px) {
    line-height: 3;
  }
`;
const ContactAddress = styled.div`
  width: 30%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const ContactFormContainer = styled.div`
  width: 60%;
  position: relative;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const FormWrapper = styled.div`
  background: linear-gradient(40deg, #fffffff5, #323232, #fffff5);
  padding: 1px;
  border-radius: 10px;
`;
const Contactform = styled.form`
  font-size: var(--font-small);
  font-family: var(--font-heading);
  justify-content: space-between;
  border-radius: 10px;
  padding: 30px;
  background: black;
  box-shadow: 0px 1rem 1.5rem -0.9rem #000000e1;
  div {
    margin-bottom: 15px;
  }
  h2 {
    margin: 10px 0 20px 0;
  }
  label {
    display: block;
    margin-bottom: 6px;
    color: lightgray;
  }

  button {
    width: 100px;
  }
  a {
    display: inline-block;
  }
  @media screen {
    padding: 18px;
  }
`;
const DimmedTextTitle = styled.div`
  color: lightgray;
  padding-bottom: 6px;
`;
const TextContainer = styled.div`
  padding-bottom: 20px;
  p,
  a {
    font-size: 18px;
  }
`;
const FocusedFieldLogo = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 50%;
  top: -20%;
  transform: translate(-50%, -50%);

  @media (max-width: 700px) {
    top: -10%;
  }
`;
const Input = styled.input<{ errors?: boolean }>`
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 14px 0;
  text-indent: 14px;
  font-size: inherit;
  font-family: inherit;
  border: 1px solid #414141;
  /* border: 1px solid ${({ errors }) => (errors ? "#fe8777" : "#414141")}; */

  background: transparent;
  &:focus {
    border: 0.1px solid #b3b2b2;
  }
`;
const Textarea = styled.textarea<{ errors?: boolean }>`
  outline: none;
  border-radius: 8px;
  padding: 14px 10px;
  font-size: var(--font-small);
  border: 1px solid #414141;
  /* border: 1px solid ${({ errors }) => (errors ? "#fe8777" : "#414141")}; */

  background: transparent;
  min-width: 100%;
  max-width: 100%;
  min-height: 100px;
  font-family: inherit;
  font-size: inherit;
  &:focus {
    border: 0.1px solid #b3b2b2;
  }
`;
const ErrorMessage = styled.p`
  color: #fe8777;
  padding-top: 6px;
  font-size: 0.875em;
`;
const TestDiv = styled.div`
  height: 80vh;
  background-color: #fff;
  color: black;
`;
