//TODO: add a form for the user to update an existing rollercoaster

//- form for new input values, action, submit button
//- params to update a specific rollercoaster

//?Stretch: pre-fill the form
// where do I get the value from? SQL query to get the data
// how can I add that value to the input? defaultValue attribute

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditPage({ params }) {
  const rollercoasterId = (await params).rollercoasterId;

  const query = await db.query(
    `SELECT name, height, country, url FROM rollercoasters WHERE id = $1`,
    [rollercoasterId]
  );

  const data = query.rows[0];

  async function handleUpdate(formData) {
    "use server";

    //collect the user input values
    const formValues = {
      name: formData.get("name"),
      height: formData.get("height"),
      country: formData.get("country"),
      url: formData.get("url"),
    };
    //SQL query to update data
    await db.query(
      `UPDATE rollercoasters SET name = $1, height = $2, country = $3, url = $4 WHERE id = $5`,
      [
        formValues.name,
        formValues.height,
        formValues.country,
        formValues.url,
        rollercoasterId,
      ]
    );
    //UX improvements
    revalidatePath("/rollercoasters");
    revalidatePath(`/rollercoasters/${rollercoasterId}`);

    redirect(`/rollercoasters/${rollercoasterId}`);
  }
  return (
    <>
      <h1>Edit Page</h1>
      {/* the edit form looks the same as the create form for better UX */}
      <form action={handleUpdate}>
        <fieldset>
          <legend>Rollercoaster Info</legend>
          <label htmlFor="name">Rollercoaster name: </label>
          <input type="text" name="name" defaultValue={data.name} required />
          <label htmlFor="height">Height: </label>
          <input
            type="number"
            name="height"
            defaultValue={data.height}
            required
            min={0}
            max={1000}
          />
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            name="country"
            defaultValue={data.country}
            required
          />
          <label htmlFor="url">Image link: </label>
          <input
            type="text"
            name="url"
            required
            placeholder="Add a link to the rollercoaster's image"
            defaultValue={data.url}
          />
        </fieldset>
        <button type="submit">Edit</button>
      </form>
    </>
  );
}
