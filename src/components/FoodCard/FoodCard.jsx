/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item;
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = () =>{
        if(user && user.email){
            // TODO: send cart item to the database
        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login in add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                    // send to the user login page
                    navigate('/login')
                 
                }
              });
        }
    }
    return (
        <div className="mt-16">
            <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
                <figure>
                    <img className="w-full h-[300px] rounded-xl" src={image} alt="Shoes" />
                </figure>
                <p className=" absolute right-0 mr-4 mt-4 px-4 bg-slate-950 text-white">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions mt-2">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 text-[#BB8506]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;