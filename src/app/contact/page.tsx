"use client";
import Button from "@/components/Button";
import Link from "next/link";
import styled from "styled-components";

export default function ContactPage() {
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
          <div>
            <hr />
          </div>
          <ContactFormContainer>
            <FocusedFieldLogo>
              <div>Go</div>
            </FocusedFieldLogo>
            <Contactform>
              <div>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea />
              </div>
              <div>
                <Button href="/about" variant="primary" altText="Submit Form">
                  Submit
                </Button>
              </div>
            </Contactform>
          </ContactFormContainer>
        </MainSection>
      </InsideWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--background);
  display: flex;
  justify-content: center;
  hr {
    background-image: linear-gradient(to left, black, white, black);
    border: none;
    width: 10px;
  }
`;
const InsideWrapper = styled.div`
  width: 1024px;
  height: 80%;
  padding: 40px;
`;
const MainSection = styled.div`
  display: flex;
  height: 80%;
  justify-content: space-between;
  hr {
    background-image: linear-gradient(to top, black, white, black);
    border: none;
    width: 1px;
    margin: 0 16px;
    height: 100%;
  }
`;
const WelcomeMessage = styled.div`
  line-height: 4;
  h1 {
    font-size: var(--font-large);
  }
`;
const ContactAddress = styled.div`
  width: 30%;
`;
const ContactFormContainer = styled.div`
  width: 60%;
  position: relative;
`;
const Contactform = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  border-radius: 10px;
  padding: 30px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  label {
    display: block;
    margin-bottom: 6px;
    color: lightgray;
    font-size: 16px;
  }
  input {
    /* line-height: 2; */
    outline: none;
    border-radius: 8px;
    padding: 14px 0;
    text-indent: 14px;
    font-size: inherit;
    border: 1px solid #414141;
    background: transparent;
  }
  textarea {
    outline: none;
    border-radius: 8px;
    padding: 14px 0;
    text-indent: 14px;
    font-size: inherit;
    border: 1px solid #414141;
    background: transparent;
    min-width: 100%;
    max-width: 100%;
    min-height: 100px;
  }
  button {
    margin-top: 10px;
    width: 100px;
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
  border: 1px ridge #fff;

  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 50%;
  top: -20%;
  transform: translate(-50%, -50%);
  div {
    background-color: #fff;
    color: green;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
