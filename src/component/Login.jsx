import { useRef, useState } from "react";
import bgImg from "../media/Background.jpg";
import openEye from "../media/Open_Eye.png";
import hiddenEye from "../media/Hidden_Eye.png";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
    console.log(isSignedIn);
  };
  const togglePassword = () => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleSignButton = () => {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };
  return (
    <div className="relative  w-full h-screen overflow-hidden">
      <Header />
      <img
        src={bgImg}
        alt="Background"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute  inset-0 flex justify-center items-center ">
        <form className=" bg-black bg-opacity-85 p-16 w-[450px] rounded-md text-whit">
          <h1 className="text-white text-3xl font-bold pb-6">
            {isSignedIn ? "Sign Up" : "Sign In"}
          </h1>
          {isSignedIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="mb-4  bg-[#0f0f0f] p-4 text-white w-full rounded  border-gray-500 border-[1px]"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="mb-4  bg-[#0f0f0f] p-4 text-white w-full rounded  border-gray-500 border-[1px]"
          />
          <div className="relative">
            <input
              ref={password}
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              className="mb-4  bg-[#0f0f0f] p-4 w-full rounded text-white border-gray-500 border-[1px]"
            />
            <span
              onClick={togglePassword}
              className="text-white absolute right-3 top-4 cursor-pointer w-7"
            >
              <img src={showPassword ? hiddenEye : openEye} />
            </span>
            <p className="text-red-500 pb-4 ">{errorMessage}</p>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-red-700 font-medium border-red-700 border-[3px] w-full text-white px-4 py-2 rounded"
              onClick={handleSignButton}
            >
              {isSignedIn ? "Sign Up" : "Sign In"}
            </button>
          </div>
          <p
            className="text-white mt-4 pt-4 cursor-pointer"
            onClick={handleSignIn}
          >
            {isSignedIn
              ? "Already Registererd. Continue to Sign In"
              : "New to Netflix? Sign Up now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
