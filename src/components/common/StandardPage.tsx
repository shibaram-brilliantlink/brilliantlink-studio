import { HTMLAttributes } from "react";
import StandardComponent from "./StandardComponent";
import { IPageComponent } from "@/lib/types";

export type StandardPageProps = HTMLAttributes<HTMLDivElement> & {
  // for now blog list data
  components: IPageComponent[];
  pageName?: string;
};

export default function StandardPage(props: StandardPageProps) {
  const { components, pageName } = props;
  if (!components) return null;
  return (
    <div>
      <h1 style={{ margin: "20px" }}>
        Standard page is now working as blogs listing page...
      </h1>
      <div>
        {components &&
          components.map((component, i) => (
            <StandardComponent key={i} content={component} />
          ))}
      </div>
    </div>
  );
}
