import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@apollo/client';
import { ADD_ClIENT_MUTATION, GET_CLIENT } from './clientQuery';


export const AddClient = ({ setShow, show }) => {
  const handleClose = () => setShow(false);
  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [addClient] = useMutation(ADD_ClIENT_MUTATION);

  const handleChange = (e) => {

    setClient((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    // const { loading, error, data } = useAddBookMutation(book)

    // Execute the mutation
    console.log(client)

    addClient({
      variables: {
        name: client.name,
        email: client.email,
        phone: client.phone
      },
      //after add the book the query will refetch to update book list
      refetchQueries: [{ query: GET_CLIENT }]
    });
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

          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name='email'
            aria-describedby="passwordHelpBlock"
            onChange={handleChange}
          />
          <Form.Label htmlFor="phone">phone</Form.Label>
          <Form.Control
            type="Tel"
            id="phone"
            name='phone'
            aria-describedby="passwordHelpBlock"
            onChange={handleChange}
          />

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
