/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart)
  // single line reduce method
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  // multiple line reduce method
  // const total = cart.reduce((sum, item)=> {
  //     return sum + item.price
  // },0)
  const handleDelete = (id) =>{
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/carts/${id}`,{
        method : "DELETE"
      })
      .then(res => res.json())
      .then(data=> {
        // console.log(data);
        refetch()
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      })
        
      }
    })
      
  }
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] items-center flex justify-evenly">
        <h2 className="text-2xl">Total Items{cart.length}</h2>
        <h2 className="text-2xl">Total Price ${total} </h2>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>
      <div className="overflow-x-auto w-full h-[500px]">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart && cart?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>${item.price}</td>
                <td>
                  <button onClick={()=> handleDelete(item._id)} className="btn btn-ghost btn-lg bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
