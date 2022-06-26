import { useState } from "react";
import axios from "axios";
import "./AddUser.scss";

export default function AddUser() {
  const [user, setUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (e) => {
    setUser((prevValue) => {
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

  async function postData(req, res) {
    try {
      const res = await axios.post("api/users", user);
      if (res.status === 200) {
        console.log("User created successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleClick = (e) => {
    if (
      user.email.lenght !== 0 &&
      user.first_name.lenght !== 0 &&
      user.last_name.length !== 0
    ) {
      postData();
      window.location.reload();
    } else {
      alert("All Fields are required!");
    }
  };

  return (
    <>
      <div className="add_container">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Email"
          name="email"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="First Name"
          name="first_name"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Last Name"
          name="last_name"
        />
        <button className="btn" onClick={handleClick}>Add</button>
      </div>
    </>
  );
}
