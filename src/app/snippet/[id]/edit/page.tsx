import { notFound } from "next/navigation";

import { db } from "../../../../db";
import { SnippetEditForm } from "../../../../components/snippetEditForm";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: +props.params.id },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div className="flex flex-col">
      <div className="w-full">
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Edit code snippets
        </h2>
      </div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
