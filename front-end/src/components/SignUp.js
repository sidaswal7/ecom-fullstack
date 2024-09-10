import React, { useState } from "react";

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        username:"",
        email:"",
        password:""
    });
    
    const handleForm = (e)=>{
        e.preventDefault();
        let userData = userInfo
        console.log(userData);
    }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-8">Register User</h1>
      <div className="flex justify-center items-center">
        <form className="py-5 px-4 rounded-md shadow-lg mb-20" onSubmit={handleForm}>
          <div className="my-2">
            <label htmlFor="username" className="font-semibold text-slate-800">
              Username:{" "}
            </label>
            <input
              id="username"
              name="username"
              placeholder="Enter username"
              type="text"
              className="block w-full px-3 my-1 placeholder:text-sm bg-slate-100 py-1"
              value={userInfo.username}
              onChange={(e)=>setUserInfo((prevState)=>({...prevState, username: e.target.value}))}
            />
          </div>
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
              onChange={(e)=>setUserInfo((prevState)=>({...prevState, email: e.target.value}))}
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
              onChange={(e)=>setUserInfo((prevState)=>({...prevState,password:e.target.value}))}
            />
          </div>
          <div className="flex justify-center my-2">
            <button className="w-full px-2 py-1 bg-orange-500 text-white hover:bg-orange-600 my-2 rounded shadow-md" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
