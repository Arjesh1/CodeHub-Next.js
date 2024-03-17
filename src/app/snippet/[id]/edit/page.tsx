import { notFound } from "next/navigation";

import { db } from "../../../../db";
import { SnippetEditForm } from "../../../../components/snippetEditForm";

interface SnippetEditPageProps {
    params: {
        id: string
    }
}
export default async function SnippetEditPage(props: SnippetEditPageProps) {
    const snippet = await db.snippet.findFirst({
        where: { id: +props.params.id },
      });

      if(!snippet){
        return notFound()
      }

      return(
        <div className="">Editting {snippet?.title}
        
        <div className="">
            <SnippetEditForm snippet={snippet}/>
        </div>
        </div>
      )

}