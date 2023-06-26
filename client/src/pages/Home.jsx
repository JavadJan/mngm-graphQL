import React, { useState } from 'react'
import { Projects } from '../components/project/AllProjects'
import { AddClient } from '../components/client/AddClient'
import { Client } from '../components/client/Clients'
import { AddProject } from '../components/project/AddProject'

export const Home = () => {
    const [show, setShow] = useState(false);
    const [addProject, setAddProject] = useState(false);
    const handleShow = () => setShow(true);
    const handleShowProject = () => setAddProject(true);

    return (
        <>
            <button variant="primary" className='btn btn-primary' onClick={handleShowProject}>Add New</button>
            <Projects />
            <hr className="mt-4 mb-4" />

            <button variant="primary" className='btn btn-primary' onClick={handleShow}>Add New</button>
            <AddClient show={show} setShow={setShow} />
            <AddProject show={addProject} setShow={setAddProject} />
            <Client />
        </>
    )
}
