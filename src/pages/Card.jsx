const Card = ({ name, description, image, price, onAdd }) => {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 flex flex-col">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-t-2xl"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-teal-800 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2 flex-grow">{description}</p>
        <p className="text-teal-700 font-bold mb-4">${price.toFixed(2)}</p>
        <button
          onClick={onAdd}
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition self-start"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
