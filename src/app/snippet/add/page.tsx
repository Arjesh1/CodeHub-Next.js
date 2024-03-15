import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { Textarea } from "../../../components/textarea";
import { ToggleButton } from "../../../components/toggleButton";
import { db } from "../../../db";

export default async function AddSnippet() {
  const handleOnAddSnippets = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const isPrivate =
      typeof formData.get("isPrivate") === "string" ? true : false;
    await db.snippet.create({
      data: {
        title,
        code,
        isPrivate,
      },
    });
    redirect("/");
  };
  return (
    <form
      className=" border-4 px-3 py-1 sm:px-10 sm:py-3"
      action={handleOnAddSnippets}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-3 sm:pb-8">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add code snippets
        </h2>
      </div>

      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <ToggleButton label="Private" name="isPrivate" />
            <Input label={"Title"} placeholderText={"Function"} name="title" />

            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Code
              </label>
              <Textarea
                rows={3}
                placeholderText="function handleLogOut() {console.log()}"
                name={"code"}
              />

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {" "}
                We recommend adding comments in the code for better
                understanding in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link href={"/"}>
          <Button buttonText={"Cancel"} type="cancel" />
        </Link>
        <Button buttonText={"Add"} type="submit" />
      </div>
    </form>
  );
}
