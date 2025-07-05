import React from "react";
const Cart = ({ items, onRemove, onIncrease, onDecrease }) => {
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10" id="cart">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div
      id="cart"
      className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => onDecrease(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => onIncrease(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between items-center">
        <span className="font-bold text-xl">
          Total: ${totalPrice.toFixed(2)}
        </span>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;