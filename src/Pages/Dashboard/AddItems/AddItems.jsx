/* eslint-disable no-unused-vars */
import axios from 'axios';
import SectionTitle from "../../../Compnents/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const AddItems = () => {
  //   console.log(img_hosting_token);
  const [axiosSecure] = useAxiosSecure()
  const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const {
    register,
    handleSubmit,
    reset,
    watch,
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
    .then(res => res.json())
    .then((imgResponse) => {
    //   console.log(imgResponse);
    if(imgResponse.success){
        const imgURL = imgResponse.data.display_url
        const {name, price, category, recipe} = data;
        const newItem = {name, price: parseFloat(price), category, recipe, image: imgURL}
        console.log(newItem);
        axiosSecure.post("/menu", newItem)
        .then(data => {
          console.log("after posting new menu item.", data.data);
          if(data.data.insertedId){
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Menu Item added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
    }
    });
  };

  return (
    <div className="w-full px-10 pb-10 bg-[#F3F3F3]">
      <SectionTitle
        subHeading="What's new"
        heading="Add an Item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Recipe name *</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="w-full flex gap-10 my-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              defaultValue="pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Deshi</option>
              <option>Desert</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price *</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered "
            />
          </div>
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Recipe Details *</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="description about the recipe"
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full my-5 max-w-xs">
          <label className="label">
            <span className="label-text">Image upload *</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <input type="submit" value="Add Item" className="btn mt-4 btn-sm" />
      </form>
    </div>
  );
};

export default AddItems;
