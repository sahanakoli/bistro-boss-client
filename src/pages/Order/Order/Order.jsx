import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../Sheard/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';


const Order = () => {
    const [tabIndex,setTabIndex] = useState(0);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Cover img={orderCoverImg} title='order food'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-6'>
                    {
                        salad.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>{pizza}</TabPanel>
                <TabPanel>{soup}</TabPanel>
                <TabPanel>{dessert}</TabPanel>
                <TabPanel>{offered}</TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;