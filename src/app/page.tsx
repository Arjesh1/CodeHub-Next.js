import Link from "next/link";

import { SnippetList } from "../components/snippetList";
import { Button } from "../components/button";
import { db } from "../db";

export default async function Home() {
  const snipppets = await db.snippet.findMany()
  console.log(snipppets)

  return (
    <div>
      <div className="py-8 grid grid-rows-1 grid-flow-col gap-2">
        <div className="border-b-2 border-slate-900 col-span-full md:col-span-5 pb-2">
          <h1 className="text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
            Share, save code snippets
          </h1>
        </div>
        <div className="col-span-full md:col-span-1 mt-4 md:mt-0 ">
          <Link href={'snippet/add'}>
          <Button
            buttonText={"+ Add"}
            type='submit'
          />
          </Link>

        </div>
      </div>

      <div className=" flex flex-row gap-3">
        <div className="basis-1/2">
          {" "}
          <Button buttonText={"Me"} 
          type='submit' />
        </div>
        <div className="basis-1/2">
          {" "}
          <Button
            buttonText={"Explore"}
            type='submit'
          />
        </div>
      </div>

      <ul
        role="list"
        className="divide-y divide-gray-100 border-t-2 mt-5 sm:mt-12 "
      >
        {snipppets.map((snippet) => (
           <SnippetList self={true} key={snippet.id} title={snippet.title}  code={snippet.code}/>
        ))}
       
      </ul>
    </div>
  );
}
