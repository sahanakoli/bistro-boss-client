import { Helmet } from "react-helmet-async";
import Banner from "../../../components/Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimoials/Testimonials";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
           <Banner></Banner> 
           <Category></Category>
           <ChefService></ChefService>
           <PopularMenu></PopularMenu>
           <Contact></Contact>
           <ChefRecommends></ChefRecommends>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;