import React, { useState } from 'react'
import Cover from '../Pages/Shared/Cover/Cover'
import shopImage from '../../src/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../CustomHook/UseMenu';
import FoodCart from '../Components/SectionTitle/FoodCart/FoodCart';
import ShopTab from './ShopTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function OurShop() {
    const categories = ['Salads','Soups','Pizzas','Desart','Drinks']
    const{category} = useParams()
    const initailIndexOf = categories.indexOf(category)

    const [tabIndex, settabInedex] = useState(initailIndexOf)
    const [menu] =useMenu()
   

    const soups = menu.filter((item)=> item.category  === 'soup')
    const drinks = menu.filter((item)=> item.category  === 'drinks')
    const pizza = menu.filter((item)=> item.category  === 'pizza')
    const salads = menu.filter((item)=> item.category  === 'salad')
    const dessert = menu.filter((item)=> item.category  === 'dessert')
    const offerd = menu.filter((item)=> item.category  === 'offered')

    return (
        <div className='pb-20'>
             <Helmet>
                    <title>Bistro | Shop</title>
                    
                  </Helmet>
            <Cover img={shopImage} title={'Our Shop'}></Cover>
            <div className='text-cente  mt-12'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => settabInedex(index)}>
                 <div className='max-w-md mx-auto pb-10'>
                 <TabList>
                        <Tab>Salads</Tab>
                        <Tab> Soups</Tab>
                        <Tab> Pizzas</Tab>
                        <Tab> Desart</Tab>
                        <Tab> Drinks</Tab>
                    </TabList>
                 </div>
                    <TabPanel>
                       <ShopTab items={salads}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                    <ShopTab items={soups}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                    <ShopTab items={pizza}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                    <ShopTab items={dessert}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                    <ShopTab items={drinks}></ShopTab>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    )
}
