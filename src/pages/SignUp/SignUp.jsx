/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import img from '../../assets/others/authentication2.png'
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider';



const SignUp = () => {
    const {register,handleSubmit,formState: { errors }} = useForm();
    const {createUser} = useContext(AuthContext);


      const onSubmit = data => 
      createUser(data.email, data.password)
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser)
      })
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm mt-24 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className=" text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className=" text-red-600">Email is required</span>}
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, 
                                    minLength:6, 
                                    maxLength:20, 
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className=" text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className=" text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className=" text-red-600">Password must be less then 20 characters</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 mb-3">
                                <input className="btn bg-[#D1A054]" type="submit" value="Sign Up" />                    
                                <p className='ml-16'>Already have an account? <Link to='/login' className=' text-[#D1A054]'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;