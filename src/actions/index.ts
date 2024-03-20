"use server";
import { redirect } from "next/navigation";

import type { Snippet } from "@prisma/client";

import { db } from "../db";

interface AddSnippetProps {
  title: string;
  code: string;
  isPrivate: boolean;
}

export async function addSnippet(snippetData: AddSnippetProps) {
  const response = await db.snippet.create({
    data: {
      ...snippetData,
    },
  });
  return response;
}

export async function editSnippet(editedData: Snippet) {
  console.log(
    "edit snipped called",
    editedData.id,
    editedData.title,
    editedData.code,
  );
}
