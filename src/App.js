import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      {/* Navbar */}
      <nav className="bg-red-700 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-white text-2xl font-bold rounded-md px-3 py-2 hover:bg-red-600 transition-colors"
          >
            Shanaaz Masala
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white rounded-md p-2"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-4">
            <a href="#products" className="text-white hover:text-red-200 rounded-md px-3 py-2">Our Products</a>
            <a href="#features" className="text-white hover:text-red-200 rounded-md px-3 py-2">Features</a>
            <a href="#testimonials" className="text-white hover:text-red-200 rounded-md px-3 py-2">Testimonials</a>
            <a href="#contact" className="text-white hover:text-red-200 rounded-md px-3 py-2">Contact</a>
          </div>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 px-2 pb-3 sm:px-3">
            <a href="#products" className="block text-white hover:bg-red-600 rounded-md px-3 py-2" onClick={() => setIsMenuOpen(false)}>Our Products</a>
            <a href="#features" className="block text-white hover:bg-red-600 rounded-md px-3 py-2" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#testimonials" className="block text-white hover:bg-red-600 rounded-md px-3 py-2" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="block text-white hover:bg-red-600 rounded-md px-3 py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-red-800 to-red-600 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'url(https://placehold.co/1920x1080/FFFFFF/000000?text=Spice+Pattern)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container mx-auto flex flex-col items-center justify-center relative z-10 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Savor the Authentic Flavors with <span className="text-yellow-300">Shanaaz Masala</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl">
            Bringing you the purest and most aromatic spices, meticulously sourced and ground to perfection.
          </p>
          <a
            href="#products"
            className="inline-block bg-yellow-400 text-red-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition-all"
          >
            Explore Our Spices
          </a>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 md:py-24 bg-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-800">Our Premium Spice Range</h2>
          <div className="flex flex-col gap-16">
            {/* Red Chilli */}
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-12 bg-red-50 p-8 rounded-lg shadow-xl">
              <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
                <img
                  src="https://placehold.co/500x500/FF0000/FFFFFF?text=Shanaaz+Red+Chilli"
                  alt="Shanaaz Masala Red Chilli Pack"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x500/FF0000/FFFFFF?text=Red+Chilli+Image"; }}
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-red-800">Shanaaz Masala Red Chilli</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Ignite your culinary creations with the vibrant color and authentic taste of premium chillies.
                </p>
                <a href="#contact" className="inline-block bg-yellow-400 text-red-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all">
                  Buy Red Chilli
                </a>
              </div>
            </div>

            {/* Turmeric */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center md:gap-12 bg-yellow-50 p-8 rounded-lg shadow-xl">
              <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
                <img
                  src="https://placehold.co/500x500/FFD700/8B4513?text=Shanaaz+Turmeric"
                  alt="Shanaaz Masala Turmeric Pack"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x500/FFD700/8B4513?text=Turmeric+Image"; }}
                />
              </div>
              <div className="md:w-1/2 text-center md:text-right">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-800">Shanaaz Masala Turmeric</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Discover the golden essence of pure turmeric – earthy, vibrant, and health-boosting.
                </p>
                <a href="#contact" className="inline-block bg-red-700 text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition-all">
                  Buy Turmeric
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 bg-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-800">Why Choose Shanaaz Masala?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Feature icon="🌿" title="Pure & Natural" text="100% natural spices without any additives for a rich, healthy taste." />
            <Feature icon="🔬" title="Finest Sourcing" text="Only top-grade ingredients selected from trusted sources worldwide." />
            <Feature icon="📦" title="Airtight Packaging" text="Packed to preserve flavor and aroma until it reaches your kitchen." />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-red-50 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-800">What Our Customers Say</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-4 scrollbar-hide lg:justify-center">
            {["Aisha K.", "Raj P.", "Fatima Z.", "Sameer R.", "Priya S."].map((name, index) => (
              <div key={index} className="flex-shrink-0 w-80 md:w-96 snap-center bg-white p-8 rounded-lg shadow-md border-t-4 border-red-600">
                <p className="text-gray-700 italic mb-4">
                  “Shanaaz Masala made my dishes flavorful like never before! Highly recommend.”
                </p>
                <p className="font-semibold text-red-700">- {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 md:py-24 bg-red-700 text-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Spice Up Your Kitchen?</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Don't settle for bland. Choose Shanaaz Masala for bold, unforgettable flavors.
          </p>
          <Link
            to="/buy-now"
            className="inline-block bg-yellow-400 text-red-900 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition-all text-xl"
          >
            Buy Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shanaaz Masala. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link> |{" "}
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

const Feature = ({ icon, title, text }) => (
  <div className="bg-red-50 p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
    <div className="text-5xl text-red-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-red-700">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default App;
