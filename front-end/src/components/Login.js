import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [userInfo, setUserInfo] = useState({email:"", password:""})
    const navigate = useNavigate()
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
          navigate("/products")
        }
      },[])
    const handleform = async (e)=>{
        try{
            e.preventDefault();
            let userData = userInfo;
            let response = await fetch(`http://localhost:4000/login`,{
                method:"POST",
                body: JSON.stringify(userData),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            setUserInfo({
                email:"",
                password:""
            })
            let data = await response.json();
            console.log(data)
            if(data.username){
                localStorage.setItem("user",JSON.stringify(data));
                navigate("/products")
            }
        } catch(err){
            console.log(err);
        }
    }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-8">Login Page</h1>
      <div className="flex justify-center items-center">
        <form
          className="py-5 px-6 rounded-md shadow-lg mb-20"
          onSubmit={handleform}
        >
          <div className="my-2">
            <label htmlFor="email" className="font-semibold text-slate-800">
              EmailId:{" "}
            </label>
            <input
              id="email"
              name="email"
              placeholder="Enter email"
              type="email"
              value={userInfo.email}
              className="block w-full px-3 my-1 placeholder:text-sm bg-slate-100 py-1"
              onChange={(e) =>
                setUserInfo((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div className="my-2">
            <label htmlFor="password" className="font-semibold text-slate-800">
              Password:{" "}
            </label>
            <input
              id="password"
              name="password"
              placeholder="Enter password"
              type="password"
              value={userInfo.password}
              className="block w-full px-3 my-1 placeholder:text-sm bg-slate-100 py-1"
              onChange={(e) =>
                setUserInfo((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex justify-center mt-3">
            <Link to="/signup" className="text-blue-900 text-sm hover:underline">Not a user? Register Here</Link>
          </div>
          <div className="flex justify-center my-2">
            <button
              className="w-full px-2 py-1 bg-orange-500 text-white hover:bg-orange-600 my-2 rounded shadow-md mt-4"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
