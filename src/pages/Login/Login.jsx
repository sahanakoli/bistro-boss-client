/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import loginImg from '../../assets/others/authentication1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';

const Login = () => {

    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

    }

    useEffect(() =>{
        loadCaptchaEnginge(6); 
    }, [])

    const handleValidateCaptchar = () => {
       const user_captcha_value = captchaRef.current.value;
       if(validateCaptcha(user_captcha_value)){
           setDisable(false);
       }
       
    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <input type="text" ref={captchaRef} name='captcha' placeholder="type the text captcha above" className="input input-bordered" required />
                                <button onClick={handleValidateCaptchar} className='btn btn-outline btn-xs mt-2'>Validate</button>
                            </div>
                            <div className="form-control mt-6 mb-3">
                                <input disabled={disable} className="btn bg-[#D1A054]" type="submit" value="Sign In" />
                            </div>                
                            <p className='ml-16'>New here? Create a New Account <Link to='/signUp' className=' text-[#D1A054]'>Registration</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;