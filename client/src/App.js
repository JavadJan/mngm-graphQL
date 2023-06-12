import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import { Client } from "./components/client/Clients";
import { useState } from "react";
import { AddClient } from "./components/client/AddClient";
import Button from 'react-bootstrap/Button';
import { Projects } from "./components/project/AllProjects";


const connect = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
})



function App() {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (

    <ApolloProvider client={connect}>

      <Header />
      <div className="container">
        <Projects />
        <hr className="mt-4 mb-4" />
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
