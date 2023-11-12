import Banner from "../../../components/Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import Contact from "../Contact/Contact";
import PopularMenu from "../PopularMenu/PopularMenu";




const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Category></Category>
           <ChefService></ChefService>
           <PopularMenu></PopularMenu>
           <Contact></Contact>
           <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;