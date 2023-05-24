import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import { useMenu } from "../../../Hooks/Hooks";
import SectionTitle from "../../../Compnents/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((items) => items.category === "dessert");
  const salads = menu.filter((items) => items.category === "salad");
  const soups = menu.filter((items) => items.category === "soup");
  const pizzas = menu.filter((items) => items.category === "pizza");
  const offered = menu.filter((items) => items.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover title={"our menu"} img={menuImg}></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't miss"
        heading={"Today's offer"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert items */}
      <MenuCategory
      items = {desserts}
      img = {dessertImg}
      title="dessert"
      ></MenuCategory>
      {/* Pizza items */}
      <MenuCategory
      items={pizzas}
      title="pizza"
      img = {pizzaImg}
      ></MenuCategory>
      {/* Salads Items */}
      <MenuCategory
      items={salads}
      title="salad"
      img = {saladImg}
      ></MenuCategory>
      {/* Soups Items */}
      <MenuCategory
      items={soups}
      title="soup"
      img = {soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
