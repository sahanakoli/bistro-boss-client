import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div className="form-control">
           <button onClick={handleGoogle}  className="btn font-medium bg-[#D1A054] text-white mt-4"><FcGoogle className="mr-2 w-4 h-4"></FcGoogle>Google Sign In</button> 
        </div>
    );
};

export default SocialLogin;