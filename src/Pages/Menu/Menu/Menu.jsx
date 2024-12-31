import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../Shared/Cover/Cover'
 import menuImage from '../../../assets/menu/banner3.jpg'
 import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
 import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
 import saladImage from '../../../assets/menu/salad-bg.jpg'
//  import DrinksImage from '../../../assets/menu/soup-bg.jpg'
 import soupsImage from '../../../assets/menu/soup-bg.jpg'
import PopularMenu from '../../PopularMenu/PopularMenu'
import useMenu from '../../../CustomHook/UseMenu'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import MenuCategory from '../../Home/Category/MenuCategory'
import { useParams } from 'react-router-dom'


export default function Menu() {

    const [menu] =useMenu()
  

    const soups = menu.filter((item)=> item.category  === 'soup')
    const drinks = menu.filter((item)=> item.category  === 'drinks')
    const pizza = menu.filter((item)=> item.category  === 'pizza')
    const salads = menu.filter((item)=> item.category  === 'salad')
    const dessert = menu.filter((item)=> item.category  === 'dessert')
    const offerd = menu.filter((item)=> item.category  === 'offered')


  return (
    <div>
         <Helmet>
        <title>Bistro | menu</title>
        
      </Helmet>
      
      <Cover img={menuImage} title={'Our Menu'}></Cover>
      {/* Main cover */}
      <SectionTitle
      subHeadings={"---Don't miss"}
      headings={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* Offerd menus item */}
      <MenuCategory items ={offerd} ></MenuCategory>
      {/* Desserts menu items */}

    <MenuCategory items={dessert}
    title='Desart'
    coverImage={dessertImage}
    ></MenuCategory>

    {/* Pizza menu  items */}
    <MenuCategory items={pizza}
    title='Pizzas'
    coverImage={pizzaImage}
    ></MenuCategory>

    {/* salad menu  items */}
    <MenuCategory items={salads}
    title='Salads'
    coverImage={saladImage}
    ></MenuCategory>

    {/* Drink menu  items */}
    {/* <MenuCategory items={drinks}
    title='Drinks'
    coverImage={pizzaImage}
    ></MenuCategory> */}
    {/* Suop menu  items */}
    <MenuCategory items={soups}
    title='Soups'
    coverImage={soupsImage}
    ></MenuCategory>




    </div>
  )
}
