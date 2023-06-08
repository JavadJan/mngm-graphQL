import { gql } from "@apollo/client";

const GET_CLIENT = gql`
{
    clients{
      id
      name
      email
      phone
    }
  }
`

const DELETE_CLIENT =
  gql`
mutation($id:ID!){
  deleteClient(id:$id){
    id
    name
    email
    phone
  }
}
`

export { GET_CLIENT, DELETE_CLIENT }