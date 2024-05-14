import React, { useState } from "react";
import "./assignment.css";
export default function AddContact({ addContact }) {
  const [contactdata, setcontactdata] = useState({ name: "", email: " " });
  function handlechange(e) {
    if (e.target.name === "name") {
      setcontactdata({ ...contactdata, name: e.target.value });
    } else {
      setcontactdata({ ...contactdata, email: e.target.value });
    }
  }
  const handleadddata = () => {
    if (contactdata.name === "" || contactdata.email === "") {
      alert("All data is Mendatory");
      return;
    }
    addContact(contactdata); //pass contact data as  a parameter
    setcontactdata({ name: "", email: "" }); // 5refresh karun new data added
  };

  return (
    <>
      <div>
        <div className="add">
          <h3>
            <b> Add Contact</b>
          </h3>
        </div>
        <form className="content">
          <label>Name:</label>
          <br />

          <input
            type="text"
            placeholder=" Enter Name"
            name="name"
            value={contactdata.name}
            onChange={handlechange}
          />
          <br />

          <label>Email:</label>
          <br />
          <input
            type="email"
            placeholder=" Enter abc@gail.com"
            name="email"
            value={contactdata.email}
            onChange={handlechange}
          />
        </form>
        <button className="btn" onClick={handleadddata}>
          Add Contact
        </button>
      </div>
    </>
  );
}
