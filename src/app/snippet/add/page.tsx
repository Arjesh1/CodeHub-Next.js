"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { Textarea } from "../../../components/textarea";
import { ToggleButton } from "../../../components/toggleButton";
import { toast } from "react-toastify";

interface CodeSnippetProps {
  title?: string;
  code?: string;
  isPrivate?: boolean;
}

export default function AddSnippet() {
  const router = useRouter();
  const [codeSnippet, setCodeSnippet] = useState<CodeSnippetProps>({isPrivate: false});

  const handleOnChange = (name: string, value: string | boolean) => {
    setCodeSnippet((previous) => ({ ...previous, [name]: value }));
  };

  const handleOnAddSnippets= (e: { preventDefault: () => void; })=>{
    e.preventDefault()
    toast.success('Added')
    console.log(codeSnippet)

  }
  return (
    <form className=" border-4 px-3 py-1 sm:px-10 sm:py-3" onSubmit={handleOnAddSnippets}>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-3 sm:pb-8">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add code snippets
        </h2>
      </div>

      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <ToggleButton
              label="Private"
              name={"isPrivate"}
              onChange={handleOnChange}
            />
            <Input
              label={"Title"}
              placeholderText={"Function"}
              onChange={handleOnChange}
              name="title"
            />

            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Code
              </label>
              <Textarea
                rows={3}
                placeholderText="function handleLogOut() {console.log()}"
                name={"code"}
                onChange={handleOnChange}
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
        <button
          onClick={() => router.push("/")}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <Button buttonText={"Add"}/>
      </div>
    </form>
  );
}
