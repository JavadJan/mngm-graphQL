import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import { Client } from "./components/Clients";

const connect = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
})


function App() {
  return (

    <ApolloProvider client={connect}>
      <Header />
      <div className="container">
        <Client />
      </div>
    </ApolloProvider>
  );
}

export default App;
