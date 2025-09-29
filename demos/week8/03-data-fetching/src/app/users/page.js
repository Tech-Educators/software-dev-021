//TODO: I want to render a list of users
//TODO: sort the list of users in alphabetical order

// route --> "/users"
// route + query string (searchParams) --> "/users?sort=asc" // "users/?sort=desc"
import Link from "next/link";

//we can destructure searchParams in our route
export default async function UsersPage({ searchParams }) {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const wrangledData = data.users;

  //searchParams is async
  const query = await searchParams;

  //logic to sort data in alphabetical order
  //if statement --> when query is "asc", change the order to alphabetical // when query is "desc", change the order to reverse alphabetical

  if (query.sort === "asc") {
    wrangledData.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
  } else if (query.sort === "desc") {
    wrangledData.sort((a, b) => {
      return b.firstName.localeCompare(a.firstName);
    });
  }

  return (
    <>
      <h1>A list of users: </h1>
      <Link href={"/users?sort=asc"}>Sort alphabetical</Link>
      <Link href={"/users?sort=desc"}>Sort reverse alphabetical</Link>

      {wrangledData.map((user) => {
        return (
          <h1 key={user.id}>
            {user.firstName} {user.lastName}
          </h1>
        );
      })}
    </>
  );
}
