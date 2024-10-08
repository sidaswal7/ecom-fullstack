import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Privatecomponent from "./components/Privatecomponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  const auth = localStorage.getItem("user");
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<Privatecomponent/>}>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update" element={<h1 className="text-center font-bold text-4xl">Update</h1>}/>
        <Route path="/logout" element={<h1 className="text-center font-bold text-4xl">Logoutt</h1>}/>
        <Route path="/profile" element={<h1 className="text-center font-bold text-4xl">Profile Page</h1>}/>
        </Route>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
