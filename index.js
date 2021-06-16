import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const port = 4000;

const gateway = new ApolloGateway({
  serviceList: [{ "name": "astronauts", url: "http://localhost:4001"}]
});

const server = new ApolloServer( {
  gateway,
  subscription: false,
})

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}/graphql`);
});