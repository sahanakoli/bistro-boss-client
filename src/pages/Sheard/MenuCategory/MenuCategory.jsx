/* eslint-disable react/prop-types */
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-16">
            { title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem key={item.id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center mt-4">
            <button className="btn btn-outline border-0 border-b-4 mt-4 ">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;