import { FC } from "react";

export type StandardComponentProps = {
  content: any;
  pageName?: string;
};

export default function StandardComponent(props: StandardComponentProps) {
  const { content, pageName } = props;
  return null;
}
