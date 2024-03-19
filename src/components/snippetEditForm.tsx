"use client";
import React from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

import type { Snippet } from "@prisma/client";
import { ToggleButton } from "./toggleButton";

import { Input } from "./input";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  function handleEditorChange(value: any, event: any) {
    console.log("here is the current model value:", value);
  }

  return (
    <>

<div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <ToggleButton label="Private" name="isPrivate" />
            <Input label={"Title"} placeholderText={"Function"} name="title" />

            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Code
              </label>
              <Editor
        height="60vh"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        onChange={handleEditorChange}
        theme="vs-dark"
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
      
    </>
  );
}
