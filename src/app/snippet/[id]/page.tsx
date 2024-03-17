import { notFound } from "next/navigation";
import Link from "next/link";

import { db } from "../../../db";
import { Button } from "../../../components/button";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
  searchParams: {};
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: +props.params.id },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div className="px-6 flex flex-col gap-5">
      <div className="w-full mx-auto space-y-4 flex justify-between">
        <h1 className="text-5xl font-bold leading-none">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link href={`${snippet.id}/edit`}>
            <Button buttonText={"Edit"} type={"submit"} />
          </Link>

          <Button buttonText={"Delete"} type={"delete"} />
        </div>
      </div>
      <div className="p-3 bg-gray-200 rounded border-gray-300">
        <code className="whitespace-pre">{snippet.code}</code>
      </div>
    </div>
  );
}
