import Image from "next/image";
import { Button } from "./button";


interface SnippetListProps {
  self: boolean;
  title: string;
  code:  string;
}

export const SnippetList = ({ self, title, code }: SnippetListProps) => {
  return (
    <li className="flex-col mt-3 sm:flex sm:flex-row sm:justify-between gap-4 sm:py-5 ">
      <div className="flex min-w-0 gap-x-4 items-center">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src="https://cdn1.iconfinder.com/data/icons/jetflat-multimedia-vol-2/90/004_100_code_tag_brackets_coding_html_development-512.png"
          alt="HTML tag icon"
        />
        <div className="min-w-0 flex justify-center items-center content-center">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {title}
          </p>
        </div>
      </div>
      {self ? (
        <div className=" shrink-0 sm:flex sm:flex-col sm:items-end py-3 sm:py-0 ">
          <Button
            buttonText={"Edit"} type={"submit"}            // onClick={() => console.log("edit pressed")}
          />
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Posted on {new Date(Date.now()).toLocaleString()}
          </p>
        </div>
      ) : (
        <div className=" shrink-0 sm:flex sm:flex-col sm:items-end  py-3 sm:py-0">
          <p className="text-sm leading-6 text-gray-900">Leslie Alexander</p>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Posted on {new Date(Date.now()).toLocaleString()}
          </p>
        </div>
      )}
    </li>
  );
};
