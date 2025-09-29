//route --> "/staff/:staffName"

//we use [] in the folder name to create a dynamic route
// in React, we used the hook useParams() to get the value of the dynamic params
//I cannot use React hooks (client-side) in my server component
//Instead, I can use the params prop to access that value
export default async function StaffNamePage({ params }) {
  //params is an object, and the property key is the name of our dynamic route folder
  // params: {
  //   staffName: "value";
  // }
  //params is async
  //in our server component, we can make our component function async
  const staffNameParams = await params.staffName;
  return (
    <>
      <h1>Staff Name: {staffNameParams} </h1>
    </>
  );
}
