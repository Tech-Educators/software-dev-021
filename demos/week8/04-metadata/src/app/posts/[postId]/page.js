//metadata for dynamic page
export async function generateMetadata({ params }) {
  const postId = await params.postId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();
  //we will return a metadata object that dynamically changes depending on the post the user is navigating to
  return {
    title: `Blog post - ${postId}`,
    description: `${data.title}`,
    openGraph: {
      title: `Blog post - ${postId}`,
      description: `${data.title}`,
      type: "website",
      url: `http://localhost:3000/posts/${postId}`,
      images: ["imgUrl"],
      //make sure the image is stored in the public folder
    },
  };
}

export default async function PostIdPage({ params }) {
  const postId = await params.postId;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();
  return (
    <>
      <h1>Post dynamic page</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  );
}
