//*** Imports                 ***//
import StandardPage from "@/components/common/StandardPage";

//*** Page logics, functions ***//
async function fetchPageData() {
  const res = await fetch(
    "http://127.0.0.1:1337/api/articles?fields[0]=title&fields[1]=summary&fields[2]=readTime&fields[3]=publishedAt"
  );
  const data = await res.json();
  // console.log(data);
  return data;
}
export default async function BlogPage() {
  const pageComponent = await fetchPageData();

  return (
    <>
      <h1>All blogs list..</h1>
      <StandardPage components={pageComponent} pageName={"blogs_page"} />
    </>
  );
}
