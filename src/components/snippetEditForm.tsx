'use client'

import type {Snippet} from '@prisma/client'

interface SnippetEditFormProps {
    snippet: Snippet
}

export function SnippetEditForm ({snippet}: SnippetEditFormProps) {
  return (
    <div>snippetEditForm client component with title {snippet.title}</div>
  )
}
