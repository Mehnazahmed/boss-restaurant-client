import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import desiImg from '../../../assets/menu/bangladeshi-cuisine.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import drinksImg from '../../../assets/menu/drinks-bg.jpg';
import menuimg from "../../../assets/menu/menu-bg.jpg";
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");
  const desi = menu.filter((item) => item.category === "desi");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuimg} title="our menu"></Cover>
      <SectionTitle
        subHeading="don't miss"
        heading="today's offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
      items={dessert}
      title="dessert"
      coverImg={dessertImg}

      ></MenuCategory>
      <MenuCategory
      items={pizza}
      title="pizza"
      coverImg={pizzaImg}

      ></MenuCategory>
      <MenuCategory
      items={salad}
      title="salad"
      coverImg={saladImg}

      ></MenuCategory>
      <MenuCategory
      items={soup}
      title="soup"
      coverImg={soupImg}

      ></MenuCategory>
      <MenuCategory
      items={drinks}
      title="drinks"
      coverImg={drinksImg}

      ></MenuCategory>
      <MenuCategory
      items={desi}
      title="desi"
      coverImg={desiImg}

      ></MenuCategory>
    </div>
  );
};

export default Menu;
