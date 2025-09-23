//TODO: store the form data, track the changes of the inputs, submit the form data, and send it to the server

//STEP 1: store the form data --> state

//STEP 2: track the changes in the inputs --> event (listener: onChange, handler)

//STEP 3: submit the form data --> event (listener: onSubmit, handler)

//STEP 4: send the form data to the server --> fetch route and POST the form data

import { useState } from "react";

export default function Form() {
  //form data storage
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");

  //track the changes in the input value --> onChange
  function handleUsernameChange(event) {
    setUsername(event.target.value);
    console.log(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    console.log(event.target.value);
  }

  function handleJobChange(event) {
    setJob(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //STEP 4
    //fetch POST server route
    //add headers and body
    console.log(username, email, job);
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Info</legend>
          {/* htmlFor is the same as for */}
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            required
            value={username}
            // defaultValue={} for autofilling
            onChange={handleUsernameChange}
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </fieldset>

        <fieldset>
          <legend>Professional Info</legend>
          <label htmlFor="job">Job: </label>
          <input
            type="text"
            name="job"
            required
            value={job}
            onChange={handleJobChange}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
