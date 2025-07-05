import { useState } from "react";
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from "./pages/Card";
import Cart from "./pages/Cart";
import Popular from "./pages/Popular";
import AboutUs from "./pages/AboutUs";
import { Route, Routes } from "react-router-dom";
function App() {
  const [cartItems, setCartItems] = useState([]);

  const cards = [
    {
      id: 1,
      name: "Pasta",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
    },
    {
      id: 2,
      name: "Burger",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    },
    {
      id: 3,
      name: "Pizza",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },


    {
      id: 4,
      name: "Pizza",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },

     {
      id: 5,
      name: "Pizza",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },
     {
      id: 6,
      name: "Pizza",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },
     {
      id: 7,
      name: "Pizza",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },
     {
      id: 8,
      name: "Pizza",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },

   {
      id: 9,
      name: "Pizza",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },

   {
      id: 10,
      name: "Pizza",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },
    // add more dishes as needed
  ];

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(i => i.id === item.id);
      if (itemExists) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(i => i.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(i =>
        i.id === id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
  };

  return (
    <>
   {/* <div>
    <Routes>
      <Route  path="/about" element={<AboutUs />}/> 
      <Route 
    path="/r" 
    element={
      <Cart 
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />
    } 
  />
       
       
      <Route  path="/pop" element={<Popular />}/> 

    </Routes>
   </div> */}
    <div className="bg-slate-100 min-h-screen">
      <Nav cartCount={cartItems.length} />
      <Hero />
      <Popular onAdd={addToCart} />
      <div id="menu" className="py-10">
        <h1 className="text-teal-800 text-center text-3xl font-bold mb-8 mt-15">Our Menu</h1>
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {cards.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              description="Delicious and fresh."
              image={item.image}
              price={item.price}
              onAdd={() => addToCart(item)}
            />
          ))}
        </div>
      </div>

      <Cart
        items={cartItems}
        onRemove={removeFromCart}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
      />

    <AboutUs/>
    </div>
     </>
  );
}

export default App;
