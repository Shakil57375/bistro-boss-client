import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Compnents/SectionTitle/SectionTitle";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";
// TODO : Provide publish key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GetWay_PK);

const Payment = () => {
  const [cart] = useCart()
  const total = cart.reduce((sum, item) => (sum + item.price),0)
  // console.log(total);
  const price = parseFloat(total.toFixed(2))
  return (
    <div>
      <SectionTitle
        subHeading="Please Provide"
        heading="payment"
      ></SectionTitle>
      <p>Tk is coming</p>
      <Elements stripe={stripePromise}>
        <CheckOutFrom cart = {cart} price={price}></CheckOutFrom>
      </Elements>
    </div>
  );
};

export default Payment;
