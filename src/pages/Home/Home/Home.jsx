import Banner from "../../../components/Banner/Banner";
import ChefService from "../../../components/ChefService/ChefService";
import Category from "../Category/Category";



const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Category></Category>
           <ChefService></ChefService>
        </div>
    );
};

export default Home;