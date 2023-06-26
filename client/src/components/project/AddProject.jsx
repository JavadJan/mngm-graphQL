import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation, useQuery } from '@apollo/client';
import { GET_CLIENT } from '../queries/clientQuery';
import { ADD_PROJECT, GET_PROJECTS } from '../queries/projectQuery';

export const AddProject = ({ setShow, show }) => {
    const { loading, data, error } = useQuery(GET_CLIENT)

    const handleClose = () => setShow(false);

    const projectStatus = {
        new: "new",
        completed: "completed",
        progress: "progress"
    }
    // const [status , setStatus] = useState(enum)
    const [project, setProject] = useState({})

    const [addProject] = useMutation(ADD_PROJECT)

    const handleChange = async (e) => {
        setProject((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleAdd = async (e) => {
        e.preventDefault()

        await addProject({
            variables: {
                name: project.name,
                description: project.description,
                status: project.status,
                clientId: project.clientId
            },
            update(cache, { data: addProject }) {
                //===>read from the cache
                const { projects } = cache.readQuery({ query: GET_PROJECTS });
                //===> write to cache
                cache.writeQuery({
                    query: GET_PROJECTS,
                    //it equals to clients.concat([addClient])
                    data: { projects: [...projects, addProject] }
                });
            }
        },

        )
        setShow(false)

    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleAdd}>
                <Modal.Body>
                    <Form.Label htmlFor="name">name</Form.Label>
                    <Form.Control
                        type="text"
                        id="name"
                        name='name'
                        aria-describedby="passwordHelpBlock"
                        onChange={handleChange}
                    />

                    <Form.Label htmlFor="description">Description</Form.Label>
                    <Form.Control
                        type="text"
                        id="email"
                        name='description'
                        aria-describedby="passwordHelpBlock"
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor="Status">Status</Form.Label>
                    <Form.Select name='status' id="status"
                        aria-label="Default select example" onChange={handleChange}>
                        <option>Select Status</option>
                        <option value={projectStatus.new}>new</option>
                        <option value={projectStatus.progress}>progress</option>
                        <option value={projectStatus.completed}>completed</option>
                    </Form.Select>

                    <Form.Label htmlFor="Status">Client</Form.Label>

                    {
                        loading ? <div className="spinner-border position-absolute top-50 start-50" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                            :
                            <Form.Select name='clientId' id="client"
                                aria-label="Default select example" onChange={handleChange}>
                                <option >Select The Client</option>
                                {
                                    data.clients.map((client) => {
                                        return <option value={client.id} key={client.id}>{client.name}</option>
                                    })}

                            </Form.Select>}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit'>
                        Save
                    </Button>
                </Modal.Footer>
            </form>
        </Modal >
    )

}
