import "./Cards.scss";
import axios from "axios";
import { useState } from "react";

export default function Cards({ user }) {

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`api/users/${id}`);
      if (res.status === 200) {
        console.log("User deleted successfully!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "delete": {
        const userID = value;
        if (
          window.confirm(
            `Are you sure you want to delete this user?\nEmail: ${user.email}`
          )
        ) {
          deleteUser(userID);
          window.location.reload();
        }
        break;
      }
      case "updatetoggle":{
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="card">
      <h1>
        <b>Username:</b> {user.first_name} {user.last_name}
      </h1>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <div className="btn_container">
        <button
          className="ubtn"
          name="updatetoggle"
          onClick={handleClick}
        >
          Update
        </button>
        <button
          className="dbtn"
          value={user._id}
          name="delete"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
