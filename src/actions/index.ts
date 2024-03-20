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
  // Validate snippetData
  if (!snippetData.title || !snippetData.code) {
    throw new Error("Title and code are required.");
  }

  // Insert the snippet into the database
  const newSnippet = await db.snippet.create({
    data: {
      ...snippetData,
    },
  });

  redirect(`/`);
}

export async function editSnippet(editedData: Snippet) {
  const { id, title, code, isPrivate } = editedData;
  await db.snippet.update({
    where: { id },
    data: { title, code, isPrivate },
  });
  redirect(`/snippet/${id}`);
}

export async function getSelectedSnippet(id: number) {
  if (!id) {
    throw new Error("Id is  required.");
  }

  // get the selected snippet from the database
  const selectedSnippet = await db.snippet.findFirst({
    where: { id },
  });

  console.log(selectedSnippet);

  return selectedSnippet;
}

export async function deleteSnippet(id: number) {
  if (!id) {
    throw new Error("Id is  required.");
  }

  // Delete the snippet into the database
  await db.snippet.delete({
    where: {
      id,
    },
  });
  redirect(`/`);
}
