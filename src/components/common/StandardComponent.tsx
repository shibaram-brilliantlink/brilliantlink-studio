"use client";
import { IPageComponent } from "@/lib/types";
import LargeCard from "../temp/LargeCard";

export type IStandardComponentProps = {
  content: IPageComponent;
  pageName?: string;
};

const StandardComponent = (props: IStandardComponentProps) => {
  // const { content, pageName } = props;
  const { content } = props;

  return (
    // temporary card......
    <LargeCard
      // documentId={content.documentId}
      title={content.title}
      summary={content.summary}
      readTime={content.readTime}
      publishedDate={content.publishedAt}
    />
  );
};
export default StandardComponent;
