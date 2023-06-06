import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Compnents/SectionTitle/SectionTitle";
import { useMenu } from "../../../Hooks/Hooks";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MangeItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`)
          .then((res) => {
            console.log(res.data);
            refetch();
            Swal.fire("Deleted!", "User file has been deleted.", "success");
          });
      }
    });
  };
  return (
    <div className="w-full ">
      <SectionTitle
        heading="manage all items"
        subHeading="Hurry up"
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="  ">
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index+1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td>{item.price}</td>

                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-lg bg-red-500 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MangeItems;
