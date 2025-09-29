//TODO: I want to render a specific user's data

export default async function UserIdPage({ params }) {
  const userId = await params.userId;
  //we can use the value of params in our fetch to specifically get one user
  const response = await fetch(`https://dummyjson.com/users/${userId}`);
  const data = await response.json();

  return (
    <>
      <h1>One user: {userId}</h1>
      <ul>
        <li>{data.firstName}</li>
        <li>{data.lastName}</li>
        <li>{data.email}</li>
        <li>{data.university}</li>
      </ul>
    </>
  );
}
