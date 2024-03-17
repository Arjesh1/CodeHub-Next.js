"use client";
import React from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

import type { Snippet } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  function handleEditorChange(value: any, event: any) {
    console.log("here is the current model value:", value);
  }

  return (
    <>
      <div>snippetEditForm client component with title {snippet.title}</div>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        onChange={handleEditorChange}
      />
    </>
  );
}
