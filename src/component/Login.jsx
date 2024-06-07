import bgImg from "../media/Background.jpg";
import Header from "./Header";

const Login = () => {
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
          <h1 className="text-white text-3xl font-bold pb-6">Sign In</h1>
          <input
            type="text"
            placeholder="Email or mobile number"
            className="mb-4  bg-[#0f0f0f] p-4  w-full rounded  border-gray-500 border-[1px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4  bg-[#0f0f0f] p-4 w-full rounded  border-gray-500 border-[1px]"
          />
          <div className="flex justify-center">
            <button className="bg-red-700 font-medium border-red-700 border-[3px] w-full text-white px-4 py-2 rounded">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
