"use client";
import styled, { css } from "styled-components";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  href: string;
} & (
  | { variant: "primary"; altText: string }
  | { variant: "secondary"; altText?: never }
);

export default function Button({
  children,
  variant = "primary",
  altText,
  href,
  disabled,
}: ButtonProps) {
  if (variant == "primary") {
    return (
      <Link href={href}>
        <PrimaryButton disabled={disabled}>
          <span>{children}</span>
          <span>{altText}</span>
        </PrimaryButton>
      </Link>
    );
  } else {
    return (
      <Link href={href}>
        <SecondaryButton disabled={disabled}>
          <span>{children}</span>
        </SecondaryButton>
      </Link>
    );
  }
}

const PrimaryButton = styled.button`
  position: relative;
  overflow: hidden;
  border: 1px solid #18181a;
  color: #18181a;
  display: inline-block;
  font-size: 15px;
  padding: 18px 18px 17px;
  text-decoration: none;
  cursor: pointer;
  background: #fff;

  span:first-child {
    position: relative;
    transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 10;
  }
  span:last-child {
    color: #ffffff;
    display: block;
    position: absolute;
    bottom: 0;
    transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 100;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translateY(225%) translateX(-50%);
    height: 14px;
    line-height: 13px;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: bottom center;
    transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
    transform: skewY(9.3deg) scaleY(0);
    z-index: 50;
  }

  &:hover:after {
    transform-origin: bottom center;
    transform: skewY(9.3deg) scaleY(2);
  }
  &:hover span:last-child {
    transform: translateX(-50%) translateY(-100%);
    opacity: 1;
    transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
  }
`;
const SecondaryButton = styled.button`
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 6px;
  color: #ffffff;
  display: inline-block;
  line-height: 1em;
  max-width: 100%;
  padding: 20px 3px;
  font-size: 15px;
  cursor: pointer;

  span {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
    &:hover {
      background: none;
    }
  }
`;
