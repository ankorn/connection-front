import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState();

  useEffect(() => {
    const fetchState = async () => {
      const newState = await fetch("/");
      console.log(newState);
      // setState(newState);
    };

    fetchState();
  }, []);

  return <div className="App">{state ? state : "Loading state..."}</div>;
}

export default App;
