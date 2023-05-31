import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, price, name, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [ , refetch] = useCart()
  // console.log({ user });
  const location = useLocation()
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      const orderItem = {menuItemId: _id, name, image, price, email: user.email}
      fetch("http://localhost:5000/carts",{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(orderItem) 
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch() //update the number of cart on the added on the navbar
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state : {from : location}});
        }
      });
    }
  };
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-6 mt-4 px-4">
          {price}
        </p>
        <div className="card-body flex items-center flex-col">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-orange-400 border-b-4 bg-slate-100 mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
