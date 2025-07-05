import React from "react";

function About() {
  return (
    <section id="about" className="py-20 h-full mt-60" >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-teal-800 mb-6">
          About <span className="text-teal-600">Khao Piyo</span>
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At <strong>Khao Piyo</strong>, we’re passionate about connecting people with the rich flavors of India. 
          Our mission is to deliver freshly prepared, authentic Indian dishes right to your doorstep — whether it’s a classic Biryani or a modern fusion wrap.
        </p>
        <p className="text-gray-600 mt-4 text-md">
          With handpicked ingredients, expert chefs, and a commitment to quality, we strive to make every meal an experience to remember. 
          From taste to timely delivery, we put our heart into every dish we serve.
        </p>
        <div className="mt-8">
          <a
            href="#menu"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-md font-semibold transition duration-300"
          >
            Explore Our Menu
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
