/* eslint-disable react/prop-types */
import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-6'>
                    {
                        items.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
                    }
                    </div>
    );
};

export default OrderTab;