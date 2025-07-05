const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-slate-100 border-b border-gray-200 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-gray-800">
        <h1 className="text-2xl font-bold tracking-wide text-teal-700">
          Khao Piyo
        </h1>
        <div className="flex gap-x-6">
          <a href="#menu" className="hover:text-teal-600 font-medium">
            Menu
          </a>
          <a href="#popular" className="hover:text-teal-600 font-medium">
            Popular
          </a>
          <a href="#cart" className="relative hover:text-teal-600 font-medium">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </a>
          <a href="#about" className="hover:text-teal-600 font-medium">
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;