import { HTMLAttributes } from "react";
import StandardComponent from "./StandardComponent";
import { IPageComponent } from "@/lib/types";

export type IStandardPageProps = HTMLAttributes<HTMLDivElement> & {
  // for now blog list data
  components: IPageComponent[];
  pageName?: string;
};

const StandardPage = (props: IStandardPageProps) => {
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
};
export default StandardPage;
