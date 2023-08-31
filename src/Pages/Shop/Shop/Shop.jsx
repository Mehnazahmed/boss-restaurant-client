import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from "../../../Shared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import ShopTab from "../ShopTab/ShopTab";

const Shop = () => {
  const categories=['salad','pizza','soup','dessert','drinks']
  const {category}=useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex,setTabIndex] =useState(initialIndex);
    const [menu]= useMenu();
    
    const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const desi = menu.filter((item) => item.category === "desi");
  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <Cover img={shopImg} title="our shop"></Cover>
      <Tabs  defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList  className='uppercase '>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drinks</Tab>
          <Tab>desi</Tab>
        </TabList>
        <TabPanel>
          <ShopTab items={salad}></ShopTab>
        </TabPanel>
        <TabPanel>
        <ShopTab items={pizza}></ShopTab>
        </TabPanel>
        <TabPanel>
        <ShopTab items={soup}></ShopTab>
        </TabPanel>
        <TabPanel>
        <ShopTab items={dessert}></ShopTab>
        </TabPanel>
        <TabPanel>
        <ShopTab items={drinks}></ShopTab>
        </TabPanel>
        <TabPanel>
        <ShopTab items={desi}></ShopTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
