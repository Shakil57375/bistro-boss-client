import SectionTitle from "../../../Compnents/SectionTitle/SectionTitle";
import chefRecommended from"../../../assets/home/slide1.jpg"
const ChefRecommends = () => {
  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      <div className="card w-full shadow-xl">
          <figure>
            <img
              src={chefRecommended}
              alt="Shoes"
              className="w-full h-[400px]"
            />
          </figure>
          <div className="card-body flex text-center">
            <h2 className="text-2xl font-semibold text-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className=" w-full mx-auto">
              <button className="btn btn border-yellow-600 text-yellow-600 btn-outline border-0 border-b-4">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card w-full shadow-xl">
          <figure>
            <img
              src={chefRecommended}
              alt="Shoes"
              className="w-full h-[400px]"
            />
          </figure>
          <div className="card-body flex text-center">
            <h2 className="text-2xl font-semibold text-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className=" w-full mx-auto">
              <button className="btn text-yellow-600">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card w-full shadow-xl">
          <figure>
            <img
              src={chefRecommended}
              alt="Shoes"
              className="w-full h-[400px]"
            />
          </figure>
          <div className="card-body flex text-center">
            <h2 className="text-2xl font-semibold text-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className=" w-full mx-auto">
              <button className="btn border-yellow-600 text-yellow-600 btn-outline border-0 border-b-4">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
