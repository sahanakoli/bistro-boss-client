import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefCard from "./ChefCard";


const ChefRecommends = () => {
    const [recommends, setRecommends] = useState([]);
    useEffect(() =>{
     fetch('chef.json')
     .then(res => res.json())
     .then(data => 
        setRecommends(data)
     )
    }, [])
    return (
        <div className="mt-20">
            <section>
                <SectionTitle
                subHeading='Should Try'
                heading='CHEF RECOMMENDS'
                ></SectionTitle>
                <div className="grid md:grid-cols-3 gap-6">
                    {
                        recommends.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
                </div>
            </section>
            
        </div>
    );
};

export default ChefRecommends;