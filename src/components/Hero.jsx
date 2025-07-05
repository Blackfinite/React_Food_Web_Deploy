import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[90vh] bg-slate-100 flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl font-extrabold text-teal-900 mb-6 leading-tight">
            Welcome to <span className="text-teal-600">Khao Piyo</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Experience mouth-watering dishes inspired by traditional Indian flavors. Freshly prepared, served with love.
          </p>
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl text-lg font-semibold"
          >
            Explore Menu
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?w=600&auto=format&fit=crop&q=60"
            alt="Delicious Indian Food"
            className="w-full max-w-md rounded-xl shadow-md object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;