/* eslint-disable react/prop-types */


const ChefCard = ({chef}) => {
    const {image, name, recipe} = chef;
    return (
        <div className="mt-8">
            <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
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

export default ChefCard;