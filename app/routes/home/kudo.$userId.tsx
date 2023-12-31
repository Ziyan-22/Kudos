// app/routes/home/kudo.$userId.tsx

import { json, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

// 1
export const loader: LoaderFunction = async ({ request, params }) => {
  // 2
  const { userId } = params
  return json({ userId })
}

export default function KudoModal() {
  // 3
  const data = useLoaderData()
  return <h2> User: {data.userId} </h2>
}