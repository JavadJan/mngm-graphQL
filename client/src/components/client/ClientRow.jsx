import { useMutation } from '@apollo/client';
import React from 'react'
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT, GET_CLIENT } from '../queries/clientQuery';
import { GET_PROJECTS } from '../queries/projectQuery';

export const ClientRow = ({ client }) => {
    const [deleteClient] = useMutation(DELETE_CLIENT);
    // const { loading, error, data } = useQuery(GET_CLIENT)


    const handleDelete = (id) => {
        console.log(id)
        deleteClient({
            variables: {
                id: id
            },
            //===>after add the book the query will refetch to update book list
            refetchQueries: [{ query: GET_CLIENT }, { query: GET_PROJECTS }]

            //===>in other  way to update cache:
            // update(cache, { data: deleteClient }) {
            //     //     //===>read from the cache
            //     const { clients } = cache.readQuery({ query: GET_CLIENT });
            //     //     //===> write to cache
            //     cache.writeQuery({
            //         query: GET_CLIENT,
            //         data: { clients: clients.filter(client => client.id !== deleteClient.deleteClient.id) }
            //     });
            // }

        });
    }
    return (
        <>
            <tr  >
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td className='cursor-pointer' role="button"><FaTrash className='text-danger' onClick={() => handleDelete(client.id)} /></td>
            </tr>

        </>
    )

}
