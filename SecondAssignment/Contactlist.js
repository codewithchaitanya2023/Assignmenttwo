import React from "react";
import "./assignment.css";
import DeleteIcon from "@mui/icons-material/Delete"; //use material icon
export default function Contactlist(props) {
  //conact ne data access kela contactlist madhe
  // console.log(contact, "form contactlist");
  const { contact, removeContact } = props; //use destruring
  console.log(contact);
  const contactlist = contact.map((val) => {
    //contact list la render kelel
    return (
      //this is syntax of map
      <div className="contacts">
        <div style={{ marginLeft: "2px" }}>{val.data.name}</div>
        <div>{val.data.email}</div>
        <span onClick={() => removeContact(val.id)}>
          {/* id pass  */}
          <DeleteIcon />
        </span>
        {/* onclick fuction hadle  nay karu  delete icon shakat mhanun  span use kela */}
      </div>
    );
  });

  return (
    <>
      <div className="contactHeader">
        <h3>Contactlist :</h3>
      </div>
      ;<div className="list">{contactlist}</div>
      {/* //contactlist madhe list render karun save keleli ahe  
    save kelel and show kelel on screen */}
    </>
  );
}
