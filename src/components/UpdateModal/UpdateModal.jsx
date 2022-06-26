import { useState } from "react";
import axios from "axios";
import "./UpdateModal.scss";

export default function UpdateModal({ setUpd, upd, user }) {
  const [updatedUser, setUpdUser] = useState({
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
  });

  const handleChange = (e) => {
    setUpdUser((prevValue) => {
      const { value, name } = e.target;
      switch (name) {
        case "email":
          return { ...prevValue, email: value };
        case "first_name":
          return { ...prevValue, first_name: value };
        case "last_name":
          return { ...prevValue, last_name: value };
        default:
          break;
      }
    });
  };

  async function putData(id) {
    try {
      const res = await axios.put(`api/users/${id}`, updatedUser);
      if (res.status === 200) {
        console.log("User updated successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleClick = (e) => {
    if(window.confirm("Are you sure you want to edit this user?")){
        putData(e.target.value);
        setUpd(!upd);
        window.location.reload(); 
    } else {
        setUpd(!upd);
    }
  };

  return (
    <>
      <div className="upd_container">
      <h1>Enter the details you want to edit.</h1>
        <input
          type="text"
          onChange={handleChange}
          placeholder={user.email}
          name="email"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder={user.first_name}
          name="first_name"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder={user.last_name}
          name="last_name"
        />
        <button className="btn" onClick={handleClick} value={user._id}>
          Update
        </button>
      </div>
    </>
  );
}
