//forms
//TODO: add an event to our form submission
// - event listener
const form = document.getElementById("user-form");
form.addEventListener("submit", handleSubmit);
// - event handler
//TODO: handle the form data
function handleSubmit(event) {
  // - prevent the default behaviour of the submit event --> to add our input data to the URL
  event.preventDefault();
  // - create an element to store our data --> object template
  // form {
  //   full-name: blankSpace,
  //   email: blankSpace,
  //   password: blankSpace
  // }
  const formDataTemplate = new FormData(form);
  console.log(formDataTemplate);
  //- add the user input values to our object template
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);
  // form {
  //   full-name: "Manny",
  //   email: "Manny@gmail.com",
  //   password: "hdjsvbvshjsdh2h3n44"
  // }
  // the next step would be to send the form values to the server to be processed (week 4 topic)
}
