import { createLazyFileRoute } from "@tanstack/react-router"

import { useGetAllUsersQuery } from "../../generated/graphql/queries/GetAllUsersQuery.generated"

export const Route = createLazyFileRoute("/about")({
  component: About,
})

function About() {
  const { data } = useGetAllUsersQuery()
  return (
    <div className="p-2">Hello from About!{JSON.stringify(data, null, 2)}</div>
  )
}
