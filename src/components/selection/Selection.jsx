import React, { Component, useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchUsers } from "./../../api/index";
const Selection = () => {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    const fetchedUsers = async () => {
      setUsersList(await fetchUsers());
    };
    fetchedUsers();
  });

  return (
    <FormControl>
      <NativeSelect>
        <option value="manik">Manik</option>
        {usersList.map((user, i) => (
          <option key={i} value={user}>
            {user}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Selection;
