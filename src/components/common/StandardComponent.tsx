"use client";
import { IPageComponent } from "@/lib/types";
import LargeCard from "../temp/LargeCard";

export type StandardComponentProps = {
  content: IPageComponent;
  pageName?: string;
};
export default function StandardComponent(props: StandardComponentProps) {
  const { content, pageName } = props;
  return (
    <LargeCard
      documentId={content.documentId}
      title={content.title}
      summary={content.summary}
      readTime={content.readTime}
      publishedDate={content.publishedAt}
    />
  );
}
