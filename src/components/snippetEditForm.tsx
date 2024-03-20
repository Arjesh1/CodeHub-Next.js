"use client";
import React, { useEffect, useState } from "react";

import Editor from "@monaco-editor/react";

import type { Snippet } from "@prisma/client";

import { ToggleButton } from "./toggleButton";
import { Input } from "./input";
import editSnippet from "../actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [snippetData, setSnippetData] = useState<Snippet>({});
  useEffect(() => {
    setSnippetData(snippet);
  }, [snippet, snippetData]);

  function handleEditorChange(value: any, event: any) {
    console.log("here is the current model value:", value);
  }

  function handleSubmit() {
    editSnippet(snippetData);
  }

  return (
    <div className="shadow-xl p-4 rounded-md border-b border-gray-900/10">
      <div className=" grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 ">
        <ToggleButton
          label="Private"
          name="isPrivate"
          checked={snippetData.isPrivate}
        />
        <Input
          label={"Title"}
          placeholderText={"Function"}
          name="title"
          value={snippetData.title}
        />

        <div className="col-span-full">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Code
          </label>
          <Editor
            height="40vh"
            defaultLanguage="javascript"
            defaultValue={snippetData.code}
            onChange={handleEditorChange}
            theme="vs-dark"
            options={{ minimap: { enabled: false } }}
          />

          <p className="mt-3 text-sm leading-6 text-gray-600">
            {" "}
            We recommend adding comments in the code for better understanding in
            the future.
          </p>
        </div>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
}
