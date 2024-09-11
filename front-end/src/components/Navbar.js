import React from "react";
import { Link, useNavigate} from "react-router-dom";
const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    navigate("/login")
  }
  return (
    <>
      <nav className="bg-indigo-950 px-10 py-6">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl text-orange-600 font-bold">
              Alt Campus&trade;
            </h1>
          </div>
          {auth ? <ul className="hidden md:flex gap-14 text-white text-lg font-semibold">
            <li className="hover:text-orange-600">
                <Link to="/products">Products</Link>
            </li>
            <li className="hover:text-orange-600">
                <Link to="/add">Add Products</Link>
            </li>
            <li className="hover:text-orange-600">
                <Link to="/update">Update Products</Link>
            </li>
            <li className="hover:text-orange-600">
                <Link to="/profile">Profile</Link>
            </li>
            <li className="hover:text-orange-600">
                <Link onClick={logout} to="/login">Logout</Link> 
            </li>
          </ul>:
          <ul className="hidden md:flex gap-14 text-white text-lg font-semibold">
             <li className="hover:text-orange-600">
                <Link to="/login">Login</Link>
            </li>
          </ul>
            }
        </div>
      </nav>
    </>
  );
};
export default Navbar;
