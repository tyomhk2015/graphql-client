import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',

  // Data, that have been fetched before, won't be fetched again.
  cache: new InMemoryCache(),
});

export default client;