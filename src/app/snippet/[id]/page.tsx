import { db } from '../../../db'

interface SnippetShowPageProps {
    params: {
        id: string
    }
    searchParams : {}
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
    const snippet = await db.snippet.findFirst({where:{id: +props.params.id}})
    console.log(snippet)
    
    return <div className="">show a snippet</div>
    
}