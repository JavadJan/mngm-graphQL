import React, { useState } from 'react'
import { EditProject } from './EditProject';

export const ButtonEdit = ({ project }) => {
    const [editProject, setEditProject] = useState(false);
    const handleShowProject = () => {
        setEditProject(true)
    }
    return (
        <>
            <button className='btn btn-primary' onClick={handleShowProject}>Edit Project</button>
            <EditProject show={editProject} setShow={setEditProject} project={project} />

        </>
    )
}
