import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [eusername, setEusername] = useState();
  const [epassword, setEpassword] = useState();
  const [ruser, setRuser] = useState(true);

  const users = props.users;

  function handleUInput(evt) {
    setEusername(evt.target.value);
  }

  function handlePInput(evt) {
    setEpassword(evt.target.value);
  }

  function checkUser() {
    var userfound = false;

    users.forEach(function (item) {
      if (item.username === eusername && item.password === epassword) {
        console.log("Login Successfull");
        userfound = true;
        navigate("/landing", { state: { user: eusername } });
      }
    });
    if (userfound === false) {
      console.log("Login Failed");
      setRuser(false);
    }
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-white p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {ruser ? (
          <p>I help you manage your activities after you login :)</p>
        ) : (
          <p className="text-red-500">Please Sign Up before you Login</p>
        )}
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1
          bg-transparent border rounded-md"
            placeholder="Username"
            onChange={handleUInput}
          />

          <input
            type="text"
            className="w-52 border-black p-1
          bg-transparent border rounded-md"
            placeholder="Password"
            onChange={handlePInput}
          />

          <button
            className="bg-[#8272DA] font-bold w-24 p-1 rounded-md"
            onClick={checkUser}
          >
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link className="underline" to={"/signup"}>
              Signup
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
