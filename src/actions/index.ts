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
  try {
    // Validate snippetData
    if (!snippetData.title || !snippetData.code) {
      throw new Error("Title and code are required.");
    }

    // Insert the snippet into the database
    await db.snippet.create({
      data: {
        ...snippetData,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Something went wrong. Please try again later" };
    }
  }

  redirect(`/`);
}

export async function editSnippet(editedData: Snippet) {
  const { id, title, code, isPrivate } = editedData;
  try {
    await db.snippet.update({
      where: { id },
      data: { title, code, isPrivate },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Something went wrong. Please try again later" };
    }
  }

  redirect(`/snippet/${id}`);
}

export async function deleteSnippet(id: number) {
  try {
    if (!id) {
      throw new Error("Id is  required.");
    }

    // Delete the snippet into the database
    await db.snippet.delete({
      where: {
        id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Something went wrong. Please try again later" };
    }
  }

  redirect(`/`);
}
