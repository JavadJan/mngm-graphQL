import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
    {
        projects{
            id
            name,
            description
            client {
              id
              name
              phone
              email
            }
        }
    }
`
const GET_PROJECT = gql`
query ($id:ID!){
    project(id : $id){
        id
        name,
        description,
        status
        client {
            id
            name
            phone
            email
        }
    }
}
  
    
`


export { GET_PROJECTS, GET_PROJECT }