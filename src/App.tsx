import { useQuery, gql } from "@apollo/client";

import "./App.css";

const GET_USER = gql`
  query GetUser {
    name
  }
`;

function App() {
  const { loading, error, data: user } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return <div className="App">{user}</div>;
}

export default App;
