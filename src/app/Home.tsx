import React from "react"

import { useGetAllUsersQuery } from "../../generated/graphql/queries/GetAllUsersQuery.generated"

export type HomeProps = {}

const Home = (props: HomeProps) => {
  const { data, error } = useGetAllUsersQuery()
  console.log(error, data)
  return <div>{JSON.stringify(data, null, 2)}</div>
}

export default Home
