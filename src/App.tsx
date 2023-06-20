import { useQuery } from "react-query";
import axios from "axios";

import "./App.css";

function App() {
  const result = useQuery("pokemon", () =>
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => res.data)
  );

  console.log(result);

  return (
    <div>
      {result?.data?.results.map((poke: { name: string }) => (
        <div key={poke.name}>{poke.name}</div>
      ))}
    </div>
  );
}

export default App;
