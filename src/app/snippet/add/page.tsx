"use client";

import { Button } from "../../../components/button";
import { Input } from "../../../components/input";

export default function AddSnippet() {
  return (
    <form className=" border-4 px-3 py-1 sm:px-10 sm:py-3">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-3 sm:pb-8">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add code snippets
        </h2>
      </div>

      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <Input label={"Title"} placeholderText={"Function"} />

            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
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
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <Button buttonText={"Add"} onClick={() => console.log("add pressed")} />
      </div>
    </form>
  );
}
