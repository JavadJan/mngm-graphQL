import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { GET_PROJECT } from '../components/queries/projectQuery'
import { useParams } from 'react-router-dom';
import { ClientInfo } from '../components/client/ClientInfo';
import { DeleteProject } from '../components/project/DeleteProject';
// import { EditProject } from '../components/project/EditProject';
import { ButtonEdit } from '../components/project/ButtonEdit';

export const Project = () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery(GET_PROJECT,
    {
      variables: {
        id: id
      }
    }
  )

  if (loading) return (
    <div className="spinner-border position-absolute top-50 start-50" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )

  if (error) {
    return (<p>something went wrong!</p>)
  }
  console.log(data, id)
  return (
    <div className='border p-3'>
      <h4>{data.project.name}</h4>
      <p>{data.project.description}</p>
      <p>{data.project.status}</p>
      <ClientInfo client={data.project.client} />
      <div className='d-flex justify-content-between'>
        <ButtonEdit project={data.project}  />
        <DeleteProject projectId={data.project.id} />
      </div>
      <a href="/" >Home</a>
    </div>
  )
}
