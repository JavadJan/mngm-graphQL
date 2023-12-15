import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation, useQuery } from '@apollo/client';
import { GET_CLIENT } from '../queries/clientQuery';
import { EDIT_PROJECT, GET_PROJECT } from '../queries/projectQuery';

export const EditProject = ({ show, setShow, project }) => {
    const [name, setName] = useState(project.name)
    const [description, setDescription] = useState(project.description)
    const [status, setStatus] = useState(project.status)
    const [clientId, setClientId] = useState(project.client.id)

    const { loading, data } = useQuery(GET_CLIENT)
    const [updateProject] = useMutation(EDIT_PROJECT)

    const handleClose = () => setShow(false);

    const projectStatus = {
        new: "new",
        completed: "completed",
        progress: "progress"
    }
    const handleUpdate = async (e) => {
        e.preventDefault()

        updateProject({
            variables: {
                id: project.id,
                name,
                description,
                status,
                clientId
            },
            // refetchQueries: [{ data: GET_PROJECT }]
            refetchQueries: [{ query: GET_PROJECT }]
        })
        setShow(false)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleUpdate}>
                <Modal.Body>
                    <Form.Label htmlFor="name">name</Form.Label>
                    <Form.Control
                        type="text"
                        id="name"
                        name='name'
                        value={name}
                        aria-describedby="passwordHelpBlock"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Form.Label htmlFor="description">Description</Form.Label>
                    <Form.Control
                        type="text"
                        id="description"
                        name='description'
                        value={description}
                        aria-describedby="passwordHelpBlock"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Label htmlFor="Status">Status</Form.Label>
                    <Form.Select name='status' id="status"
                        aria-label="Default select example" onChange={(e) => setStatus(e.target.value)}>
                        <option>Select Status </option>
                        <option value={projectStatus.new}>Not Started</option>
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
                                aria-label="Default select example" onChange={(e) => setClientId(e.target.value)}>
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
