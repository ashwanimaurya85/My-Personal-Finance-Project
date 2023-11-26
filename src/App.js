

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignUpSignIn from "./components/Signup";
import { useEffect, useState } from "react";
import SwitchMode from "./switchmode";
import { toast } from "react-toastify";
import Footer from "./components/Footer/footer";


function App() {
  const [isBlackMode, setIsBlackMode] = useState(false);

  var cursor;
  var cursorPointer;

  useEffect(() => {
    cursor = document.getElementById("cursor");
    cursorPointer = document.getElementById("cursor-pointer");

    document.body.addEventListener("mousemove", function (e) {
      return (
        (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px"),
        (cursorPointer.style.left = e.clientX + "px"),
        (cursorPointer.style.top = e.clientY + "px")
      );
    });
  
    document.body.addEventListener("mousedown", function (e) {
      return (
        (cursor.style.height = "0.5rem"),
        (cursor.style.width = "0.5rem"),
        (cursorPointer.style.height = "3rem"),
        (cursorPointer.style.width = "3rem")
      );
    });
 
    document.body.addEventListener("mouseup", function (e) {
      return (
        (cursor.style.height = "0.3rem"),
        (cursor.style.width = "0.3rem"),
        (cursorPointer.style.height = "2rem"),
        (cursorPointer.style.width = "2rem")
      );
    });
  }, []);

  const toggleMode = () => {
    setIsBlackMode(!isBlackMode);
   
  };
  useEffect(()=>{

   
   if (isBlackMode) {
    document.body.className = "black-mode";
    toast.success("White Theme Changed" ) 
  } 
    else {
    document.body.className = "white-mode";
    toast.success("Black Theme Changed!");
  }
      },[isBlackMode]);
  return (

   <span className="App">

      <div className="cursor" id="cursor" />
      <div className="cursor-pointer" id="cursor-pointer" />
     
      <SwitchMode toggleMode={toggleMode} />
     

      <Router>
        <Routes>
          <Route path="/" element={<SignUpSignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      
<Footer/>     
    </span>
  );
}

export default App;



