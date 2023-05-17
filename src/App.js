import "./App.css";
import React, { useState } from "react";
import { Users } from "./users";
import Table from "./Table";
function App() {
  const [query, setQuery] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const keys = ["first_name", "last_name", "email"];

  function search(data) {
    //return data.filter((user) => user.first_name.toLowerCase().includes(query));
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  }

  // console.log(query);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search.."
        className="search"
        onChange={searchHandler}
      ></input>
      <Table data={search(Users)} />
    </div>
  );
}

export default App;

{
  /* <ul className="list">
  {Users.filter((user) => user.first_name.toLowerCase().includes(query)).map(
    (user, key) => (
      <li className="listItem" key={user.id}>
        {user.first_name}
      </li>
    )
  )}
</ul>; */
}

// i have to add pagination there
