const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-6 mt-4 px-4">{price}</p>
        <div className="card-body flex items-center flex-col">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 border-orange-400 border-b-4 bg-slate-100 mt-4">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
