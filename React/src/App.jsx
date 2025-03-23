import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await fetch(
      "https://67dd2e03e00db03c406a827a.mockapi.io/blogs"
    );
    const data = await res.json();
    if (data && data.length) setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div
      style={{
        background: "#aeb3ee",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Blogs</h1>
      {blogs.map((blog) => (
        <Card key={blog.id} item={blog} />
      ))}
    </div>
  );
}

const App = () => {
  <div>
    <Blogs />
  </div>;
};

function Card({ item }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        borderRadius: "1rem",
        // maxwidth: "1280px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        textWrap: "pretty",

        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        // display: "flex",
        // flexDirection: "column",
        alignItems: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "4px 4px 15px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.1)";
      }}
    >
      <h3>Created At:{item.createdAt}</h3>
      <h3>Title:{item.title}</h3>
      <h3>Author:{item.author}</h3>
      <h3>Id:{item.id}</h3>
    </div>
  );
}

// /* eslint-disable no-unused-vars */
// // import React, { useEffect, useState } from "react";
// // import style from "./App.module.css";

// import { useState } from "react";

// // const blogs = [
// //   {
// //     title: "Best Tech Stack for Startups in 2025",
// //     readingTime: "3m",
// //     publishAt: "Dec 29, 2024",
// //     author: "Deepa",
// //   },
// //   {
// //     title: "Terminal picks",
// //     readingTime: "1m",
// //     publishAt: "Jan 16,2025",
// //     author: "sweta",
// //   },
// //   {
// //     title: "Do I need a jacket?",
// //     readingTime: "4m",
// //     publishAt: "Jan 17,2025we",
// //     author: "siwani",
// //   },
// //   {
// //     title: "Do I need a jacket?",
// //     readingTime: "4m",
// //     publishAt: "Jan 17,2025we",
// //     author: "siwani",
// //   },
// //   {
// //     title: "Do I need a jacket?",
// //     readingTime: "4m",
// //     publishAt: "Jan 17,2025we",
// //     author: "siwani",
// //   },
// // ];

// // export default function Blogs() {
// //   const [newBlogs, setNewBlogs] = useState(blogs);

// //   return (
// //     <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
// //       <div className={style.Main}>
// //         {newBlogs.map((items, idx) => (
// //           <Card key={idx} item={items} />
// //         ))}
// //       </div>
// //       <Form update={setNewBlogs} />
// //     </div>
// //   );
// // }

// // function Card({ item }) {
// //   let date = new Date(item.publishAt);
// //   if (date == "Invalid Date") date = new Date();
// //   const publishAt = new Intl.DateTimeFormat("en-US", {
// //     month: "short",
// //     day: "numeric",
// //     year: "numeric",
// //   }).format(date);
// //   return (
// //     <div className={style.Card}>
// //       <h2 className={style.Title}>{item.title}</h2>
// //       <p>{item.readingTime}</p>
// //       <p>{publishAt}</p>
// //       <p className={style.Author}>{item.author}</p>
// //     </div>
// //   );
// // }

// // function Form({ update }) {
// //   const [title, setTitle] = useState("");
// //   const [time, setTime] = useState(null);

// //   const [author, setAuthor] = useState("");

// //   const Handlesubmit = (e) => {
// //     e.preventDefault();
// //     if (title && time && author) {
// //       const newBlog = {
// //         title,
// //         readingTime: time,
// //         publishAt: new Date(),
// //         author,
// //       };
// //       update((e) => [newBlog, ...e]);
// //     } else {
// //       window.alert("all input is required");
// //     }
// //   };

// //   return (
// //     <form
// //       onSubmit={Handlesubmit}
// //       style={{
// //         border: "2px solid ",
// //         padding: "5px",
// //         marginTop: "4rem",
// //         marginLeft: "auto",
// //         marginRight: "auto",
// //         display: "flex",
// //         flexDirection: "column",
// //         gap: "1rem",
// //         maxWidth: "600px",
// //       }}
// //     >
// //       <FormInputDiv label={"title"} value={title} setValue={setTitle} />
// //       <FormInputDiv
// //         // divStyle={{ borderRadius: "8rem", backgroundColor: "red" }}
// //         inputStyle={{
// //           borderRadius: "8rem",
// //           paddingLeft: "1rem",
// //           paddingRight: "1rem",
// //         }}
// //         label={"time"}
// //         value={time}
// //         setValue={setTime}
// //       />
// //       <FormInputDiv label={"author"} value={author} setValue={setAuthor} />

// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }
// // function FormInputDiv({
// //   type = "text",
// //   label,
// //   value,
// //   setValue,
// //   divClass,
// //   divStyle = { display: "flex", flexDirection: "column", gap: "3px" },
// //   inputStyle,
// //   inputClass,
// // }) {
// //   return (
// //     <div className={divClass} style={divStyle}>
// //       <label>{label}</label>
// //       <input
// //         className={inputClass}
// //         style={inputStyle}
// //         type={type}
// //         value={value}
// //         onChange={(e) => setValue(e.target.value)}
// //       />
// //     </div>
// //   );
// // }

// /////////////////
// // import { useState } from 'react'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   function Increment(){
// //     setCount(count + 1);
// //   }

// //   function Decrement(){
// //     setCount(count - 1);
// //   }

// //   return (
// //     <>
// //       <h1>Counter App  {count} </h1>

// //       <button onClick={Increment}>Increment</button>
// //       <button onClick={Decrement}>Increment</button>
// //     </>
// //   )
// // }

// // export default App

// //////////////
// // export default function hi() {
// //   return (
// //     <>
// //       <Sayhi />
// //       <Sayhi name="deepa" />
// //     </>
// //   );
// // }

// // function Sayhi({ name = "Sweta" }) {
// //   return <h1>hello {name},Wassup</h1>;
// // }

// /////////
// // import React, { useEffect } from "react";

// // const Stock = 10;
// // export default function App() {
// //   const [order, setOrder] = React.useState(0);

// //   const DecQty = () => {
// //     console.log("pre count", order);
// //     setOrder((c) => (c == 0 ? 0 : c - 1));
// //     console.log("update count", order);
// //   };
// //   const IncQty = () => {
// //     console.log("pre count", order);
// //     setOrder((c) => (c == Stock ? Stock : c + 1));
// //     console.log("update count", order);
// //   };

// //   return (
// //     <div>
// //       <h1>Hello</h1>
// //       <p>{order}</p>
// //       <button onClick={IncQty}>Inc Qty</button>
// //       <button onClick={DecQty}>Dec Qty</button>
// //     </div>
// //   );
// // }

// // export default function App() {
// //   const [name, setName] = React.useState("");

// //   useEffect(() => {
// //     console.log("useEffect");
// //   }, [name]);
// //   console.log("render");

// //   function handleChange(e) {
// //     setName(e.target.value);
// //   }

// //   return (
// //     <div>
// //       <h1>{name}</h1>
// //       <input
// //         type="text"
// //         value={name}
// //         onChange={handleChange}
// //         // onChange={(e)=>setName(e.target.value)}
// //       />
// //     </div>
// //   );
// // }

// export default function Login() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("e", e);
//     const data = new FormData(e.currentTarget);
//     const formData = {
//       name: data.get("name"),
//       address: data.get("address"),
//       email: data.get("email"),
//       phnNo: data.get("phn.no"),
//     };
//     window.alert(JSON.stringify(formData));
//     console.log("formdata", formData);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <h1>Contact Form</h1>
//         <InputComp label={"Name"} type={"text"} />
//         <InputComp label={"Address"} type={"text"} />
//         <InputComp label={"Email"} type={"text"} />
//         <InputComp label={"Phn.no"} type={"Number"} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// function InputComp({ label, type = "text", value, setValue, ...rest }) {
//   return (
//     <div>
//       <label>{label}</label>
//       <input type={type} name={label.toLocaleLowerCase()} {...rest} />
//     </div>
//   );
// }

// export default function Login() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("e", e);

//     const data = new FormData(e.currentTarget);
//     const formData = {
//       name: data.get("name"),
//       address: data.get("address"),
//       email: data.get("email"),
//       phnno: data.get("phnno"),
//     };

//     window.alert(JSON.stringify(formData));
//     console.log("form data", formData);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <h1>Login Form</h1>
//         <InputComp label="Name" type="text" name="name" />
//         <InputComp label="Address" type="text" name="address" />
//         <InputComp label="Email" type="text" name="email" />
//         <InputComp label="Phn.no" type="number" name="phnno" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// function InputComp({ label, type = "text", name, ...rest }) {
//   return (
//     <div>
//       <label>{label}</label>
//       <input type={type} name={name || label.toLowerCase()} {...rest} />
//     </div>
//   );
// }
