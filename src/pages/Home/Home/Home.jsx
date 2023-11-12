import Banner from "../../../components/Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
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
           <Featured></Featured>
        </div>
    );
};

export default Home;