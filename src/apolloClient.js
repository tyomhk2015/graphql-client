import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

// Check if the client is connected to server
// client.query({
//   query: gql`
//     {
//       allCharacters {
//         id
//         name
//       }
//     }`,
// }).then(data => console.log(data));

export default client;