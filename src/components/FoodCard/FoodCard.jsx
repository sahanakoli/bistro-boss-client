/* eslint-disable react/prop-types */


const FoodCard = ({item}) => {
    const {image, name, recipe} = item;
    return (
        <div className="mt-16">
            <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
                <figure>
                    <img className="w-full h-[300px] rounded-xl" src={image} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions mt-2">
                        <button className="btn text-[#BB8506]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;