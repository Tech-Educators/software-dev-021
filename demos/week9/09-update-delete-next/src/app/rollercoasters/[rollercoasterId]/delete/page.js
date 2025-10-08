//TODO: Add a delete button to delete this specific rollercoaster
//- the button in a form --> delete button
//- the action attribute in the form to trigger the DELETE SQL query
//- the params to specify which rollercoaster we want to delete

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeletePage({ params }) {
  const rollercoasterId = (await params).rollercoasterId;

  async function handleDelete() {
    "use server";
    await db.query(`DELETE FROM rollercoasters WHERE id = $1`, [
      rollercoasterId,
    ]);
    //from UX perspective, once the rollercoaster is deleted, the user is redirected to the rollercoasters page
    revalidatePath("/rollercoasters");
    redirect("/rollercoasters");
  }
  return (
    <>
      <h1>Delete Page</h1>
      <form action={handleDelete}>
        <button type="submit" className="bg-red-700 cursor-pointer">
          Are you sure you want to delete?
        </button>
      </form>
    </>
  );
}
