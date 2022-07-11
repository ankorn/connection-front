import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    const fetchState = async () => {
      const response = await fetch("/test");
      const result = await response.text();
      setState(result);
    };

    fetchState();
  }, []);

  return <div className="App">{state ? state : "Loading state..."}</div>;
}

export default App;
