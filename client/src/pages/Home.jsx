import React, { useState } from 'react'
import { Projects } from '../components/project/AllProjects'
import { AddClient } from '../components/client/AddClient'
import { Client } from '../components/client/Clients'

export const Home = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Projects />
            <hr className="mt-4 mb-4" />

            <button variant="primary" className='btn btn-primary' onClick={handleShow}>Add New</button>
            <AddClient show={show} setShow={setShow} />
            <Client />
        </>
    )
}
