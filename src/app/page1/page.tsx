async function fetchPageData() {
  try {
    const res = await fetch("http://127.0.0.1:1337/api/authors?populate=*");
    const data = await res.json();
    return data[0].articles;
  } catch (error) {
    console.error("Error:", error);
  }
}
export default async function Page1() {
  const pageData = await fetchPageData();
  console.log(pageData, "hello");
  return (
    <div>
      page 1 lorem10 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Vitae, praesentium?
    </div>
  );
}
