import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUSer = result.user;
        const saveUser = {name: loggedInUSer.displayName, email: loggedInUSer.email}
        // console.log(loggedInUSer);
        fetch("http://localhost:5000/users", {
            method : "POST",
            headers : {
              "content-type" : "application/json"
            },
            body : JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then(() => {
                navigate(from, {replace: true})
            });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="divider"></div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-circle btn-outline"
      >
        <FaGoogle className="text-red-600"></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
