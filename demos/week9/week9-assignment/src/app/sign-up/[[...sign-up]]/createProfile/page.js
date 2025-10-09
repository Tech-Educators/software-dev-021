//TODO: I want the user to create a profile using form to add a nickname, bio...
//when the user signs-up, lerk creates a userId
//the userId does not exist until the user has signed-up!
//redirects --> use them to improve the user flow (use a diagram for help)
//make sure Clerk redirects are in the .env file
//once the user has created their profile, redirect them to either their personal profile page or the posts timeline

export default function createProfilePage() {
  //build a form for the user to insert their details
  //the input values will be stored in the users table, including the clerk userId (auth(), currentUser()) --> in your users table, make the clerkId the primary key
  return (
    <>
      <h1>Create your profile!</h1>
    </>
  );
}
