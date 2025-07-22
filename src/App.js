import React, { useState } from 'react'; // Import useState for managing mobile menu state

// Main App component for the landing page
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      {/* Navbar */}
      <nav className="bg-red-700 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-bold rounded-md px-3 py-2 hover:bg-red-600 transition-colors">
            Shanaaz Masala
          </a>
          {/* Mobile menu button (hamburger icon) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white rounded-md p-2"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
          {/* Desktop navigation links */}
          <div className="hidden md:flex space-x-4">
            <a href="#products" className="text-white hover:text-red-200 transition-colors rounded-md px-3 py-2">Our Products</a>
            <a href="#features" className="text-white hover:text-red-200 transition-colors rounded-md px-3 py-2">Features</a>
            <a href="#testimonials" className="text-white hover:text-red-200 transition-colors rounded-md px-3 py-2">Testimonials</a>
            <a href="#contact" className="text-white hover:text-red-200 transition-colors rounded-md px-3 py-2">Contact</a>
          </div>
        </div>
        {/* Mobile navigation links - conditionally rendered */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 px-2 pb-3 sm:px-3">
            <a href="#products" className="block text-white hover:bg-red-600 rounded-md px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Our Products</a>
            <a href="#features" className="block text-white hover:bg-red-600 rounded-md px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#testimonials" className="block text-white hover:bg-red-600 rounded-md px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="block text-white hover:bg-red-600 rounded-md px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Main Hero Section - General Brand Introduction */}
      <section className="relative bg-gradient-to-r from-red-800 to-red-600 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'url(https://placehold.co/1920x1080/FFFFFF/000000?text=Spice+Pattern)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container mx-auto flex flex-col items-center justify-center relative z-10 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Savor the Authentic Flavors with <span className="text-yellow-300">Shanaaz Masala</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl">
            Bringing you the purest and most aromatic spices, meticulously sourced and ground to perfection for an unforgettable culinary journey.
          </p>
          <a
            href="#products"
            className="inline-block bg-yellow-400 text-red-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore Our Spices
          </a>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="products" className="py-16 md:py-24 bg-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-800">Our Premium Spice Range</h2>
          <div className="flex flex-col gap-16">
            {/* Red Chilli Product */}
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-12 bg-red-50 p-8 rounded-lg shadow-xl">
              <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
                <img
                  src="https://placehold.co/500x500/FF0000/FFFFFF?text=Shanaaz+Red+Chilli"
                  alt="Shanaaz Masala Red Chilli Pack"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/500x500/FF0000/FFFFFF?text=Red+Chilli+Image"; }}
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-red-800">Shanaaz Masala Red Chilli</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Ignite your culinary creations with the authentic taste and vibrant color of premium red chillies, ground to perfection. Experience balanced heat and rich aroma.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-yellow-400 text-red-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Buy Red Chilli
                </a>
              </div>
            </div>

            {/* Turmeric Product */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center md:gap-12 bg-yellow-50 p-8 rounded-lg shadow-xl">
              <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
                <img
                  src="https://placehold.co/500x500/FFD700/8B4513?text=Shanaaz+Turmeric"
                  alt="Shanaaz Masala Turmeric Pack"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/500x500/FFD700/8B4513?text=Turmeric+Image"; }}
                />
              </div>
              <div className="md:w-1/2 text-center md:text-right">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-800">Shanaaz Masala Turmeric</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Discover the golden goodness of pure turmeric, renowned for its vibrant color, earthy flavor, and health benefits. A staple for every kitchen.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Buy Turmeric
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-800">Why Choose Shanaaz Masala?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-red-50 p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl text-red-600 mb-4">🌿</div> {/* Changed icon to be more general */}
              <h3 className="text-xl font-semibold mb-3 text-red-700">Pure & Natural</h3>
              <p className="text-gray-600">
                Our spices are 100% natural, free from artificial colors or preservatives, ensuring authentic taste.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-red-50 p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl text-red-600 mb-4">🔬</div> {/* Changed icon to be more general */}
              <h3 className="text-xl font-semibold mb-3 text-red-700">Finest Sourcing</h3>
              <p className="text-gray-600">
                We meticulously select the best quality ingredients from trusted farms around the world.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-red-50 p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl text-red-600 mb-4">📦</div> {/* Changed icon to be more general */}
              <h3 className="text-xl font-semibold mb-3 text-red-700">Airtight Packaging</h3>
              <p className="text-gray-600">
                Ensuring freshness and potency, our spices are packed to retain their natural aroma and flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-red-50 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-800">What Our Customers Say</h2>
          {/* Testimonials Container with Horizontal Scrolling */}
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 space-x-6 scrollbar-hide lg:justify-center">
            {/* Testimonial 1 */}
            <div className="flex-shrink-0 w-80 md:w-96 snap-center bg-white p-8 rounded-lg shadow-md border-t-4 border-red-600">
              <p className="text-gray-700 italic mb-4">
                "Shanaaz Masala Red Chilli has transformed my cooking! The flavor is incredible, and the color it adds to my curries is just beautiful."
              </p>
              <p className="font-semibold text-red-700">- Aisha K.</p>
            </div>
            {/* Testimonial 2 */}
            <div className="flex-shrink-0 w-80 md:w-96 snap-center bg-white p-8 rounded-lg shadow-md border-t-4 border-red-600">
              <p className="text-gray-700 italic mb-4">
                "I've tried many brands, but Shanaaz Masala's red chilli powder stands out. It's consistently fresh and delivers the perfect amount of heat."
              </p>
              <p className="font-semibold text-red-700">- Raj P.</p>
            </div>
            {/* Testimonial 3 */}
            <div className="flex-shrink-0 w-80 md:w-96 snap-center bg-white p-8 rounded-lg shadow-md border-t-4 border-red-600">
              <p className="text-gray-700 italic mb-4">
                "Highly recommend! My biryani never tasted this good before. The aroma is captivating, and the taste is truly authentic."
              </p>
              <p className="font-semibold text-red-700">- Fatima Z.</p>
            </div>
            {/* Add more testimonials here for scrolling effect */}
            <div className="flex-shrink-0 w-80 md:w-96 snap-center bg-white p-8 rounded-lg shadow-md border-t-4 border-red-600">
              <p className="text-gray-700 italic mb-4">
                "The best red chilli powder I've ever used. It adds a depth of flavor that no other brand has managed to achieve."
              </p>
              <p className="font-semibold text-red-700">- Sameer R.</p>
            </div>
            <div className="flex-shrink-0 w-80 md:w-96 snap-center bg-white p-8 rounded-lg shadow-md border-t-4 border-red-600">
              <p className="text-gray-700 italic mb-4">
                "Shanaaz Masala is my go-to for spices. Their red chilli is consistently high quality and makes my dishes pop!"
              </p>
              <p className="font-semibold text-red-700">- Priya S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-16 md:py-24 bg-red-700 text-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Spice Up Your Kitchen?</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Don't settle for less. Choose Shanaaz Masala for an unparalleled culinary experience.
          </p>
          <a
            href="#"
            className="inline-block bg-yellow-400 text-red-900 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 ease-in-out text-xl"
          >
            Buy Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shanaaz Masala. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
