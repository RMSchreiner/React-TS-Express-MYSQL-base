import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {MessageForm} from "./components/MessageForm";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>App Component</h1>
      <p>Data from API: {data}</p>
    </div>
  );
};

ReactDOM.render(
<React.StrictMode>
<MessageForm />
</React.StrictMode>,
document.getElementById("root"));