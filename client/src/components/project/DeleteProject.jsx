import { useMutation } from '@apollo/client'
import React from 'react'
import { DELETE_PROJECT } from '../queries/projectQuery'
import {  useNavigate } from 'react-router-dom'


export const DeleteProject = ({ projectId }) => {
    const [deleteProject] = useMutation(DELETE_PROJECT)
    
    let navigate = useNavigate();
    const handleDelete = async () => {
        deleteProject({
            variables: {
                id: projectId
            }
        },
            navigate('/')
        )
    }
    return (
        <>
            <button className='btn btn-danger' onClick={handleDelete}>Delete Project</button>
        </>
    )
}
