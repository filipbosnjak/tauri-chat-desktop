import { useState } from "react"
import {
  ifNotAuthenticatedError,
  NotAuthenticatedErrorToast,
  SomethingWentWrongToast,
} from "@/routes/components/_toast-utils"
import { createLazyFileRoute } from "@tanstack/react-router"
import { invoke } from "@tauri-apps/api/tauri"

import { useGetAllUsersQuery } from "../../generated/graphql/queries/GetAllUsersQuery.generated"

export const Route = createLazyFileRoute("/")({
  component: Index,
})

function Index() {
  const [greetMsg, setGreetMsg] = useState("")
  const [name, setName] = useState("")

  const { data, error } = useGetAllUsersQuery()

  ifNotAuthenticatedError(error)

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }))
  }

  greet()

  return <div>index (home route /) {greetMsg}</div>
}
