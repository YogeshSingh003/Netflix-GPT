import { useNavigate } from "react-router";
import logo from "../media/Netflix_Logo.png";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);
  return (
    <div className=" absolute z-50  flex items-center justify-between  py-2 bg-gradient-to-b w-full from-black">
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
        </div>
      )}
    </div>
  );
};

export default Header;
