import { HTMLAttributes } from "react";
import StandardComponent from "./StandardComponent";

export type StandardPageProps = HTMLAttributes<HTMLDivElement> & {
  content?: string;
  pageName?: string;
};

export default function StandardPage(props: StandardPageProps) {
  return (
    <div>
      <h1 style={{ margin: "20px" }}>
        Standard page is now working as blogs listing page.....
      </h1>
      <StandardComponent />
    </div>
  );
}
