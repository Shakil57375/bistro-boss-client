const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        className="w-[120px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] h-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name} ----------------- </h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
