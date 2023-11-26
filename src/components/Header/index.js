import React, { useEffect } from "react";
import "./styles.css";
import {  useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import userSvg from "../../assets/user.svg";

function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  function logout() {
    auth.signOut();
    navigate("/");
  }

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="navbar">
      <p className="navbar-heading">Financly-Tracker</p>
       {user && (
   <p className="navbar-link" onClick={logout}>
     <span style={{ marginRight: "1rem" }}>
       <img
        src={user.photoURL ? user.photoURL : userSvg}
         width={user.photoURL ? "32" : "24"}
         style={{ borderRadius: "50%"}}/>
          </span>
          Logout
        </p>
       
      )}
     
    </div>

  );
  
}

export default Header;








  // {user && (
  //       <p className="navbar-link" onClick={logout}>
  //         <span style={{ display:'flex',alignItems:"center",gap:"0.25rem" }}>
  //           <img
  //             src={user.photoURL ? user.photoURL : userSvg}
              
  //             style={{ borderRadius: "50%",height:"1.5rem",width:"1.5rem"}}
  //           />