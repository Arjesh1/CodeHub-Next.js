"use client";
import React, { useState } from "react";

import Editor from "@monaco-editor/react";

import type { Snippet } from "@prisma/client";

import { ToggleButton } from "./toggleButton";
import { Input } from "./input";
import { editSnippet } from "@/actions";
import Link from "next/link";
import { Button } from "./button";
import { toast } from "react-toastify";

export function SnippetEditForm(snippet: Snippet) {
  const [snippetData, setSnippetData] = useState<Snippet>(snippet);

  const handleOnDataChange = (
    name: string,
    value: string | boolean | undefined,
  ) => {
    setSnippetData((previous) => ({ ...previous, [name]: value }));
  };

  async function handleEditSubmit() {
    const editResponse = await editSnippet(snippetData);
    if (editResponse) {
      return toast.error(editResponse.message);
    }
  }

  return (
    <div className="shadow-xl p-4 rounded-md border-b border-gray-900/10">
      <div className=" grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 ">
        <ToggleButton
          label="Private"
          name="isPrivate"
          checked={snippetData ? snippetData.isPrivate : snippet.isPrivate}
          onChange={handleOnDataChange}
        />
        <Input
          label={"Title"}
          placeholderText={"Function"}
          name="title"
          value={snippetData ? snippetData.title : snippet.title}
          onChange={handleOnDataChange}
        />

        <div className="col-span-full">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Code
          </label>
          <Editor
            height="40vh"
            defaultLanguage="javascript"
            defaultValue={snippetData ? snippetData.code : snippet.code}
            onChange={(value) => handleOnDataChange("code", value)}
            theme="vs-dark"
            options={{ minimap: { enabled: false } }}
          />

          <p className="mt-3 text-sm leading-6 text-gray-600">
            {" "}
            We recommend adding comments in the code for better understanding in
            the future.
          </p>
        </div>

        <div className="flex col-span-full items-end justify-end  gap-x-6">
          <Link href={`/snippet/${snippet.id}`}>
            <Button buttonText={"Cancel"} type="cancel" />
          </Link>
          <Button
            buttonText={"Edit"}
            type="submit"
            onClick={handleEditSubmit}
          />
        </div>
      </div>
    </div>
  );
}
