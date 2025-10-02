//TODO: get the individual post data from the database
//TODO: implement a delete action to delete comments

export default function PostIdPage() {
  //when you are collecting the comment form data, the user does not give you the foreign key value
  //when you insert the form data into the table, YOU have to also insert the foreign key value
  // the foreign key value references the id in the other table --> this is how you know what value to insert
  return (
    <div>
      Individual post page
      {/* TODO: render the individual post data */}
      {/* TODO: set up a form for the user to leave a comment (you can use a component Form or you could write the <form></form> directly on this page) */}
      {/* TODO: render the list of comments */}
      {/* TODO: add a delete button per comment (can be a component, if you want)*/}
    </div>
  );
}
