import { useRef, useState } from "react";
import bgImg from "../media/Background.jpg";
import openEye from "../media/Open_Eye.png";
import hiddenEye from "../media/Hidden_Eye.png";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router";

const Login = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    setIsSignedUp(!isSignedUp);
    // console.log(isSignedUp);
  };
  const togglePassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleSignButton = (event) => {
    // console.log(isSignedUp);
    event.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (isSignedUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user.email + " succesfully signed up");
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user.email + " succesfully signed in");
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
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
            {isSignedUp ? "Sign Up" : "Sign In"}
          </h1>
          {isSignedUp && (
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
              {isSignedUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
          <p
            className="text-white mt-4 pt-4 cursor-pointer"
            onClick={handleSignIn}
          >
            {isSignedUp
              ? "Already Registererd. Continue to Sign In"
              : "New to Netflix? Sign Up now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
