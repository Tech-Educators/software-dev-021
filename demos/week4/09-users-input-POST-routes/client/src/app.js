//TODO: Collect user's data from the form and send it to the server

//select the form from the DOM
const staffForm = document.getElementById("staff-form");

//add a submit event to the form
staffForm.addEventListener("submit", handleSubmit);

//handle the submit event
function handleSubmit(event) {
  //prevent the data from going to the url
  event.preventDefault();
  //create a new template object using my form inputs
  const formData = new FormData(staffForm); //this is the box to store our input data
  //fill the input data in to the template object
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  //send the data to the server
  //- we have a POST route called add-staff in the server, ready to receive our formValues
  //- connect client with specific server route --> fetch
  //- add the formValues to the fetch request --> body
  fetch("http://localhost:8080/add-staff", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}
