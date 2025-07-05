import Card from "./Card";

const popularItems = [
  {
    id: 101,
    name: "Tandoori Chicken",
    description: "Spicy grilled chicken marinated in Indian spices.",
    image: "https://media.istockphoto.com/id/1396604313/photo/roasted-whole-chicken-legs-with-condiment-directly-above-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=1D5tmeb0HGE2bT2yPtMwJlxVOrwpnWDcF0BNG27z_Qg=",
    price: 12.99,
  },
  {
    id: 102,
    name: "Biryani",
    description: "Aromatic rice dish cooked with saffron and meat/veggies.",
    image: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
    price: 10.99,
  },
  {
    id: 103,
    name: "Paneer Tikka",
    description: "Chunks of paneer grilled in tandoor with spices.",
    image: "https://media.istockphoto.com/id/2207303894/photo/malai-panner-tikka.webp?a=1&b=1&s=612x612&w=0&k=20&c=uWSD7Ce75rdw2IrgSo4LkTs2g0azgMoKG8FoEMpWTb8=",
    price: 9.49,
  },

  {
    id: 104,
    name: "Paneer Tikka",
    description: "Chunks of paneer grilled in tandoor with spices.",
    image: "https://media.istockphoto.com/id/2207303894/photo/malai-panner-tikka.webp?a=1&b=1&s=612x612&w=0&k=20&c=uWSD7Ce75rdw2IrgSo4LkTs2g0azgMoKG8FoEMpWTb8=",
    price: 9.49,
  },

  {
    id: 105,
    name: "Paneer Tikka",
    description: "Chunks of paneer grilled in tandoor with spices.",
    image: "https://media.istockphoto.com/id/2207303894/photo/malai-panner-tikka.webp?a=1&b=1&s=612x612&w=0&k=20&c=uWSD7Ce75rdw2IrgSo4LkTs2g0azgMoKG8FoEMpWTb8=",
    price: 9.49,
  },

   {
    id: 101,
    name: "Tandoori Chicken",
    description: "Spicy grilled chicken marinated in Indian spices.",
    image: "https://media.istockphoto.com/id/1396604313/photo/roasted-whole-chicken-legs-with-condiment-directly-above-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=1D5tmeb0HGE2bT2yPtMwJlxVOrwpnWDcF0BNG27z_Qg=",
    price: 12.99,
  },
  {
    id: 102,
    name: "Biryani",
    description: "Aromatic rice dish cooked with saffron and meat/veggies.",
    image: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
    price: 10.99,
  },
  {
    id: 103,
    name: "Paneer Tikka",
    description: "Chunks of paneer grilled in tandoor with spices.",
    image: "https://media.istockphoto.com/id/2207303894/photo/malai-panner-tikka.webp?a=1&b=1&s=612x612&w=0&k=20&c=uWSD7Ce75rdw2IrgSo4LkTs2g0azgMoKG8FoEMpWTb8=",
    price: 9.49,
  },

  {
    id: 104,
    name: "Paneer Tikka",
    description: "Chunks of paneer grilled in tandoor with spices.",
    image: "https://media.istockphoto.com/id/2207303894/photo/malai-panner-tikka.webp?a=1&b=1&s=612x612&w=0&k=20&c=uWSD7Ce75rdw2IrgSo4LkTs2g0azgMoKG8FoEMpWTb8=",
    price: 9.49,
  },

  {
    id: 105,
    name: "Paneer Tikka",
    description: "Chunks of paneer grilled in tandoor with spices.",
    image: "https://media.istockphoto.com/id/2207303894/photo/malai-panner-tikka.webp?a=1&b=1&s=612x612&w=0&k=20&c=uWSD7Ce75rdw2IrgSo4LkTs2g0azgMoKG8FoEMpWTb8=",
    price: 9.49,
  },
];

const Popular = ({ onAdd }) => {
  return (
    <section id="popular" className="py-10 bg-slate-100">
      <h2 className="text-3xl text-center font-bold text-teal-800 mb-8 mt-15">Popular Dishes</h2>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {popularItems.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            onAdd={() => onAdd(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
