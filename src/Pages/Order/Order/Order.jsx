import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import orderCover from "../../../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useMenu } from "../../../Hooks/Hooks";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  <Helmet>
    <title>Bistro Boss | Order Food</title>
  </Helmet>;
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndexes, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter((items) => items.category === "dessert");
  const salads = menu.filter((items) => items.category === "salad");
  const soups = menu.filter((items) => items.category === "soup");
  const pizzas = menu.filter((items) => items.category === "pizza");
  const drinks = menu.filter((items) => items.category === "drinks");
  return (
    <div>
      <Cover img={orderCover} title="order food"></Cover>
      <Tabs defaultIndex={tabIndexes} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
