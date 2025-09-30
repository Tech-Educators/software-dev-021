//metadata for static page
export const metadata = {
  title: "Blog - Posts Page",
  description: "All the titles available",
  openGraph: {
    title: "Blog - Posts Page",
    description: "All the titles available",
    type: "website",
    url: "http://localhost:3000/posts",
    images: ["imgUrl"],
    //make sure the image is stored in the public folder
  },
};

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return (
    <>
      <h1>Posts page</h1>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        );
      })}
    </>
  );
}
