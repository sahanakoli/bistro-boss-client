/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import {  useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";


const Login = () => {

    const [disabled, setDisabled] = useState(true);

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { googleSignIn } = useContext(AuthContext);

    const from = location.state?.pathname || '/';
    console.log('state in the login page', location.state)

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
        .then(result =>{
           const user = result.user;
           console.log(user);
           event.target.reset();

           Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, { replace: true});
        })

    }

    useEffect(() =>{
        loadCaptchaEnginge(6); 
    }, [])

    const handleValidateCaptcha = (e) => {
       const user_captcha_value = e.target.value;
       if(validateCaptcha(user_captcha_value)){
           setDisabled(false);
       }
       else{
        setDisabled(true)
       }
    }

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
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card mt-28 flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body ">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type the text captcha above" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 mb-3">
                                {/* TODO: apply disable for re captcha */}
                                <input disabled={disabled} className="btn bg-[#D1A054] text-white" type="submit" value="Login" />
                                <button onClick={handleGoogle}  className="btn font-medium bg-[#D1A054] text-white mt-4"><FcGoogle className="mr-2 w-4 h-4"></FcGoogle>Google Sign In</button>
                            </div>                
                            <p className='ml-16'>New here? Create a New Account <Link to='/signUp' className=' text-[#D1A054]'>Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;