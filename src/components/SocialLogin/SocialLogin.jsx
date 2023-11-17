import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);


    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className="form-control">
           <button onClick={handleGoogle}  className="btn font-medium bg-[#D1A054] text-white mt-4"><FcGoogle className="mr-2 w-4 h-4"></FcGoogle>Google Sign In</button> 
        </div>
    );
};

export default SocialLogin;