// import './App.css';
// import TaskTracker from './Components/TaskTracker';
// import { BrowserRouter as Router } from 'react-router-dom';

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// export default function App() {
//   // const [post, setPost] = useState([]);
//   // const handleAdd = () => {
//   //   // fetch("http://localhost:3000/post", {
//   //   //   method: "POST",
//   //   //   headers: {
//   //   //     "Content-Type": "application/json",
//   //   //   },
//   //   //   body: JSON.stringify({
//   //   //     title: "Rikkei Soft",
//   //   //     author: "Phong thanh cong"
//   //   //   })
//   //   // })
//   //   axios.post("http://localhost:3000/post", {
//   //     title : "Rikkei Soft 2",
//   //     author: "Phong quyet tam"
//   //   })
//   //   .then(reponse => console.log(reponse))
//   // }
//   // useEffect(() => {
//   //   // fetch("http://localhost:3000/post")
//   //   // .then(res=> res.json())
//   //   // .then((data) => setPost(data));
//   //   axios.get("http://localhost:3000/post")
//   //     .then(result => setPost(result.data))
//   // }, [])
//   return (
//     <div className="App">
//       <TaskTracker />
//       {/* <h1>API</h1> */}
//       {/* <ol>
//         {
//           post.map(e => <li key={e.id}>{e.title}-{e.author}</li>)
//         }
//       </ol>
//       <button onClick={handleAdd}>Add Post</button> */}
//     </div>
//   )
// }


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import TaskTracker from './Components/TaskTracker';
import ShowTaskList from './Components/newTasks/ShowTaskList';
import "./App.css"
import About from './Components/newTasks/About';

const App = () => {
  return (
    <div style ={{backgroundColor: "#f3f3f3"}}>
      {/* <TaskTracker />
      <p className="text-center">Mini Project API & Asynchronous © 2023</p>
      <p className="text-center">
        <a href="/about">About</a>
      </p> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowTaskList />}>
        </Route>
        <Route path='about' element={<About />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
