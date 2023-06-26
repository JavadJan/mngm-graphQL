import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
    {
        projects{
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

const ADD_PROJECT = gql`
    mutation($name:String!, $description:String! , $status:ProjectStatus! , $clientId:String!){
        addProject(name:$name , description:$description , status:$status , clientId:$clientId){
            id
            name
            description
            status
            client{
                id
                name
                email
                phone
            }
        }
    }
    `

const DELETE_PROJECT = gql`
   mutation($id:ID!){
    deleteProject(id:$id){
        id
        name
    }
   }
`
const EDIT_PROJECT = gql`
mutation($id: ID!, $name: String!, $description: String!, $status: UpdateProjectStatus!, $clientId: String!) {
    updateProject(id: $id, name: $name, description: $description, status: $status, clientId: $clientId) {
        id
        name
        description
        status
        client {
            id
            name
            email
            phone
        }
    }
}
`;



export { GET_PROJECTS, GET_PROJECT, ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT }