"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { SnippetList } from "../components/snippetList";
import { Button } from "../components/button";

export default function Home() {
  const [userSnippets, setUserSnippets] = useState<boolean>(true);
  const router = useRouter();

  return (
    <div>
      <div className="py-8 grid grid-rows-1 grid-flow-col gap-2">
        <div className="border-b-2 border-slate-900 col-span-full md:col-span-5 pb-2">
          <h1 className="text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
            Share, save code snippets
          </h1>
        </div>
        <div className="col-span-full md:col-span-1 mt-4 md:mt-0 ">
          <Button
            buttonText={"+ Add"}
            onClick={() => router.push("/snippet/add")}
          />
        </div>
      </div>

      <div className=" flex flex-row gap-3">
        <div className="basis-1/2">
          {" "}
          <Button buttonText={"Me"} onClick={() => setUserSnippets(true)} />
        </div>
        <div className="basis-1/2">
          {" "}
          <Button
            buttonText={"Explore"}
            onClick={() => setUserSnippets(false)}
          />
        </div>
      </div>

      <ul role="list" className="divide-y divide-gray-100 border-t-2 mt-12 p-6">
        <SnippetList self={userSnippets} />
      </ul>
    </div>
  );
}
