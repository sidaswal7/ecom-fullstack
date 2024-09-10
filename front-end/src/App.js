import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/products" element={<h1 className="text-center font-bold text-4xl">Product List</h1>}/>
        <Route path="/add" element={<h1 className="text-center font-bold text-4xl">Add</h1>}/>
        <Route path="/update" element={<h1 className="text-center font-bold text-4xl">Update</h1>}/>
        <Route path="/logout" element={<h1 className="text-center font-bold text-4xl">Logoutt</h1>}/>
        <Route path="/profile" element={<h1 className="text-center font-bold text-4xl">Profile Page</h1>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
