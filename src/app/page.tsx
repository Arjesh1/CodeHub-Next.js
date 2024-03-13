"use client";

import { Button } from "../components/button";

export default function Home() {
  return (
    <div className=" h-fit p-16 ">
      <div className="py-8 grid grid-rows-1 grid-flow-col gap-2">
        <div className="border-b-2 border-slate-900 col-span-full md:col-span-5">
          <h1 className="text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
            Share, save code snippets
          </h1>
        </div>
        <div className="col-span-full md:col-span-1 mt-4 md:mt-0">
          <Button
            buttonText={"+ Add"}
            onClick={() => console.log("button pressed")}
          />
        </div>
      </div>
    </div>
  );
}
