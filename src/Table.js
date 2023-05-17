import React from "react";

export default function Table(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>FirstName</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {props.data.map((item, key) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
