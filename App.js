import logo from "./logo.svg";
// import "./App.css";

import Headerss from "./SecondAssignment/Headerss";
import AddContact from "./SecondAssignment/AddContact";
import Contactlist from "./SecondAssignment/Contactlist";
import { useEffect, useState } from "react";
import uuid4 from "uuid4";

function App() {
  const localStoragekey = "contact"; //set contact as a key
  // create keyforlocal storage
  //const [contact, setcontact] = useState([]); //empty array 2 set kel setcontact madhe conatct chya help ni
  const [contact, setcontact] = useState(() => {
    // return JSON.parse(localStorage.getItemItem(localStoragekey)) || [];
    return JSON.parse(localStorage.getItem(localStoragekey)) || [];
  });
  //forlocal storage use useeffect 1\

  useEffect(() => {
    //localStorage.setItem(localStoragekey), JSON.stringify(contact);
    localStorage.setItem(localStoragekey, JSON.stringify(contact));
  }, [contact]); //contact madhe changes yetil teva teva useeffect run hoil use contact
  const addContact = (data) => {
    console.log(data, "from app.ja"); //data show in console
    setcontact([...contact, { id: uuid4(), data }]); //data set kelela // 1 name and email access kelala
    //...contact ni copy banvali mag new data kadd kartoy
    //new value add hoil ti append kartoy contactlist madhe
  };
  const removeContact = (id) => {
    //use filter method
    const updatedlist = contact.filter((val) => {
      return val.id !== id;
    });
    setcontact(updatedlist);
  }; //remove ek parameter accept kela id
  return (
    <div className="App">
      <Headerss></Headerss>
      <AddContact addContact={addContact}></AddContact>
      <Contactlist
        contact={contact}
        removeContact={removeContact}
      ></Contactlist>
      {/* //data pass kela child
      componet contact chya help ni */}
    </div>
  );
}

export default App;
