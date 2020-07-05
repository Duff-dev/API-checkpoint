import React, { useEffect, useState } from "react";
import Users from "./components/Users";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Users users={data} />
    </div>
  );
}

export default App;
