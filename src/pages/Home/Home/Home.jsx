import Banner from "../../../components/Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import PopularMenu from "../PopularMenu/PopularMenu";
import ViewMenu from "../ViewMenu/ViewMenu";



const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Category></Category>
           <ChefService></ChefService>
           <PopularMenu></PopularMenu>
           <ViewMenu></ViewMenu>
        </div>
    );
};

export default Home;