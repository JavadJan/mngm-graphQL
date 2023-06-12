import React from 'react'
import { GET_CLIENT } from '../queries/clientQuery'
import { ClientRow } from './ClientRow';
import { useQuery } from '@apollo/client';

export const Client = () => {
    const { loading, error, data } = useQuery(GET_CLIENT)
    console.log(data)
    if (loading) return (
        <div className="spinner-border position-absolute top-50 start-50" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )

    if (error) return <p>something went wrong!</p>


    return (
        <>
            <table className="table table-striped table-hover mt-3 w-100">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.clients.map((client, i) => {
                            return <ClientRow client={client} key={i} />
                        })
                    }
                </tbody>
            </table>
        </>
    )

}


