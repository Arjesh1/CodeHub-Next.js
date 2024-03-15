import { SnippetList } from "../components/snippetList";
import { db } from "../db";
import { Hero } from "../components/hero";

export default async function Home() {
  const snipppets = await db.snippet.findMany({ where: { isPrivate: true } });

  return (
    <div>
      <Hero />
      <ul
        role="list"
        className="divide-y divide-gray-100 border-t-2 mt-5 sm:mt-12 "
      >
        {snipppets.map((snippet) => (
          <SnippetList
            self={true}
            key={snippet.id}
            title={snippet.title}
            id={snippet.id}
          />
        ))}
      </ul>
    </div>
  );
}
