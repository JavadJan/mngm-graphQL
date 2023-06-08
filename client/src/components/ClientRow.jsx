import { useMutation, useQuery } from '@apollo/client';
import React, { Component } from 'react'
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT, GET_CLIENT } from './clientQuery';

export const ClientRow = ({ client }) => {
    const [deleteClient] = useMutation(DELETE_CLIENT);
    const { loading, error, data } = useQuery(GET_CLIENT)


    const handleDelete = (id) => {
        console.log(id)
        deleteClient({
            variables: {
                id: id
            },
            //after add the book the query will refetch to update book list
            refetchQueries: [{ query: GET_CLIENT }]
        });
    }
    return (
        <>
            <tr  >
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td className='cursor-pointer' role="button"><FaTrash onClick={() => handleDelete(client.id)} /></td>
            </tr>

        </>
    )

}
