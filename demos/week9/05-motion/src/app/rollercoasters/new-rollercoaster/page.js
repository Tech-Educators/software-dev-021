//TODO: set up a form to create new data in the rollercoasters table
// - submit action --> server function
// - store the form values
// - insert the values in the database
// - extras (UX) --> refreshes the cache and redirect the user to the rollercoasters page

import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function NewRollercoasterPage() {
  //handle the submit
  //server function --> async, and "use server"

  async function handleSubmit(formData) {
    //remember this directive!!!!!!
    //we want this function to be executed in the server
    "use server";
    console.log(formData);
    //store the form data
    const formValues = {
      name: formData.get("name"),
      height: formData.get("height"),
      country: formData.get("country"),
      url: formData.get("url"),
    };
    console.log(formValues);
    //insert the data into the database
    db.query(
      `INSERT INTO rollercoasters (name, height, country, url) VALUES($1, $2, $3, $4)`,
      [formValues.name, formValues.height, formValues.country, formValues.url]
    );

    //refresh the cache
    revalidatePath("/rollercoasters");

    //redirect the user to the rollercoasters page
    redirect("/rollercoasters");
  }

  return (
    <>
      <h1>Add a new rollercoaster!</h1>
      <form action={handleSubmit}>
        <fieldset>
          <legend>Rollercoaster Info</legend>
          <label htmlFor="name">Rollercoaster name: </label>
          <input type="text" name="name" required />
          <label htmlFor="height">Height: </label>
          <input type="number" name="height" required min={0} max={1000} />
          <label htmlFor="country">Country: </label>
          <input type="text" name="country" required />
          <label htmlFor="url">Image link: </label>
          <input
            type="text"
            name="url"
            required
            placeholder="Add a link to the rollercoaster's image"
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
