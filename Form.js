// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import "./from.css";

// function Form() {
//   const dada = { name: "", email: "", password: "" };
//   const [inputedata, setinputdata] = useState(dada);
//   const [datasave, setdatasave] = useState(false);
//   useEffect(() => {}, [datasave]);
//   function handledata(e) {
//     setinputdata({ ...inputedata, [e.target.name]: e.target.value });
//     console.log(inputedata);
//   }
//   function handlesubmit(e) {
//     e.preventDefault();
//     if (!inputedata.name || !inputedata.email || !inputedata.password) {
//       alert(" All field are required");
//     } else setdatasave(true);
//   }

//   return (
//     <>
//       <pre>
//         {datasave ? (
//           <h1> Hello {inputedata.name}, succesfully submitted</h1>
//         ) : (
//           ""
//         )}
//       </pre>
//       <form className="container" onSubmit={handlesubmit}>
//         <div>
//           <h1>Registration Forms</h1>
//         </div>
//         <div>
//           <input
//             type="text"
//             style={{ height: "30px", width: "300px" }}
//             placeholder="enter Your name"
//             name="name"
//             value={inputedata.name}
//             onChange={handledata}
//           />
//           <br />
//           <input
//             type="email"
//             style={{ height: "30px", width: "300px" }}
//             placeholder="enter your Email"
//             name="email"
//             value={inputedata.email}
//             onChange={handledata}
//           />
//           <br />
//           <input
//             type="password"
//             style={{ height: "30px", width: "300px" }}
//             placeholder="enter Your secure Password"
//             name="password"
//             value={inputedata.password}
//             onChange={handledata}
//           />
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </>
//   );
// }
// export default Form;
import React, { useState, useEffect } from "react";
import "./SecondAssignment/assignment.css";
function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputedata, setinputdata] = useState(data);

  const [datasave, setdatasave] = useState(false);
  useEffect(() => {}, [datasave]);
  function handleinput(e) {
    setinputdata({ ...inputedata, [e.target.name]: e.target.value });
    console.log(inputedata);
  }

  function datasubmit(e) {
    e.preventDefault();
    if (!inputedata.name || !inputedata.email || !inputedata.password) {
      alert(" All field are required");
    } else setdatasave(true);
  }

  return (
    <>
      <pre>
        {datasave ? (
          <h1> Hello {inputedata.name}, succesfully submitted</h1>
        ) : (
          ""
        )}{" "}
      </pre>
      <form onSubmit={datasubmit}>
        <h1 className="header">Registration form</h1>
        <input
          type="text"
          placeholder="enter your name"
          value={inputedata.name}
          onChange={handleinput}
          name="name" // Corrected name attribute value
        />
        <input
          type="email"
          placeholder="Enter email abc@gmail.com"
          onChange={handleinput}
          value={inputedata.email}
          name="email"
        />
        <input
          placeholder="enter Password"
          type="password"
          onChange={handleinput}
          value={inputedata.password}
          name="password"
        />
        <div>
          <button className="btn" type="submit">
            submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
