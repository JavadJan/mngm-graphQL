import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import { Client } from "./components/Clients";
import { useState } from "react";
import { AddClient } from "./components/AddClient";
import Button from 'react-bootstrap/Button';

const connect = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
})



function App() {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (

    <ApolloProvider client={connect}>

      <Header />
      <div className="container">
        <Button variant="primary" onClick={handleShow}>
          Add New
        </Button>
        <AddClient show={show} setShow={setShow} />

        <Client />
      </div>
    </ApolloProvider>
  );
}

export default App;
