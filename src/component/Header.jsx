import { useNavigate } from "react-router";
import logo from "../media/Netflix_Logo.png";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {});
  };
  return (
    <div className=" absolute px-32 flex items-center justify-between  py-2 bg-gradient-to-b w-full from-black">
      <img className="  w-48" src={logo} />
      {user && (
        <div className="flex gap-2">
          <img className="w-10 " src={user?.photoURL}></img>
          <button
            className="bg-red-700 h-10  font-medium  text-lg border-red-700 border-[3px]  text-white px-4  rounded "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <p>{user?.displayName}</p>
        </div>
      )}
    </div>
  );
};

export default Header;
