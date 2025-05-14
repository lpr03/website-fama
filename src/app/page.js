export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center px-6" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520336811552-42878b67d25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <h1 className="text-6xl font-bold text-yellow-500 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Fama Barber Shop & Beauty Salon
        </h1>
        <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">Style That Turns Heads – Denton, TX</p>
        <a href="tel:+19406129127" className="bg-yellow-500 text-black px-8 py-4 rounded-full text-xl hover:bg-yellow-400 transition-transform transform hover:scale-105">
          Call Now
        </a>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 animate__animated animate__fadeIn animate__delay-3s">Why Choose Us</h2>
        <div className="flex justify-center gap-8 text-left">
          <div className="w-84 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-yellow-500">Experienced Staff</h3>
            <p className="text-gray-400 mt-4">Our team is highly trained with years of experience, ensuring quality service every time.</p>
          </div>
          <div className="w-84 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-yellow-500">Affordable Prices</h3>
            <p className="text-gray-400 mt-4">Enjoy top-tier services without breaking the bank. Get great value for your money!</p>
          </div>
          <div className="w-84 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-yellow-500">Stylish Cuts</h3>
            <p className="text-gray-400 mt-4">From trendy to classic, we provide personalized styles to suit your needs and preferences.</p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gray-950 py-26 px-36 text-center text-white">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Services</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-yellow-500">Haircuts</h3>
            <p className="text-gray-400 mt-4">From classic to modern styles, we provide the perfect cut for you.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-yellow-500">Beard Trimming</h3>
            <p className="text-gray-400 mt-4">Perfectly styled beards with precision trimming and grooming.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-yellow-500">Hair Styling</h3>
            <p className="text-gray-400 mt-4">Achieve the best look for any occasion with our styling expertise.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-yellow-500">Shaves</h3>
            <p className="text-gray-400 mt-4">Luxurious shaves for the ultimate relaxation and smooth finish.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-yellow-500">Coloring</h3>
            <p className="text-gray-400 mt-4">From subtle highlights to bold colors, we offer professional hair coloring services.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-yellow-500">Kids Haircuts</h3>
            <p className="text-gray-400 mt-4">Friendly and fun haircuts for kids, ensuring they leave with a smile.</p>
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Meet Our Barbers</h2>
        <div className="flex justify-center gap-8">
          <div className="w-82 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww" alt="Barber 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-xl font-semibold text-yellow-500">John Doe</h3>
            <p className="text-gray-400 mt-2">Specialization: Men's Haircuts, Beard Styling</p>
          </div>
          <div className="w-82 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Barber 2" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-xl font-semibold text-yellow-500">Jane Smith</h3>
            <p className="text-gray-400 mt-2">Specialization: Women's Styling, Hair Color</p>
          </div>
          <div className="w-82 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="Barber 3" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-xl font-semibold text-yellow-500">Mike Johnson</h3>
            <p className="text-gray-400 mt-2">Specialization: Haircuts, Kids Haircuts</p>
          </div>
        </div>
      </section>

      {/* Client Reviews in Horizontal Box */}
      <section className="py-16 px-18 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 animate__animated animate__fadeIn animate__delay-4s">Client Reviews</h2>
        <h2 className="mt-4 font-semibold text-yellow-400"> Rating: 4.6 stars (116+ reviews) </h2>
        <br></br>
        <div className="flex overflow gap-6">
          <div className="w-82 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <p className="text-gray-300">"Great experience! The staff is friendly and talented. I always leave feeling fresh."</p>
            <p className="mt-4 font-semibold text-yellow-500">– John D.</p>
          </div>
          <div className="w-82 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <p className="text-gray-300">"The best barbershop in Denton! They really know how to give a sharp haircut."</p>
            <p className="mt-4 font-semibold text-yellow-500">– Sarah W.</p>
          </div>
          <div className="w-82 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
            <p className="text-gray-300">"I love their attention to detail and the way they style my hair. Worth every penny!"</p>
            <p className="mt-4 font-semibold text-yellow-500">– Mark T.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1693591936914-14645081663a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJhcmJlciUyMFNob3AlMjBhbmQlMjBiZWF1dHklMjBzb2xvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Gallery Image 1" className="rounded-xl"/>
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery Image 2" className="rounded-xl"/>
          <img src="https://images.unsplash.com/photo-1675342656322-80aeeb53ae4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fEJhcmJlciUyMFNob3AlMjBhbmQlMjBiZWF1dHklMjBzb2xvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Gallery Image 3" className="rounded-xl"/>
        </div>
      </section>

       {/* Contact Form */}
       <section className="bg-gray-950 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Book An Appointment</h2>
        <form action="#" method="post" className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
          <input type="text" placeholder="Your Name" className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg"/>
          <input type="email" placeholder="Your Email" className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg"/>
          <textarea placeholder="Your Message" className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg"></textarea>
          <button type="submit" className="w-full py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
            Submit
          </button>
        </form>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Join Our Newsletter</h2>
        <p className="text-lg text-gray-400 mb-4">Stay updated with the latest offers and new styles.</p>
        <form action="#" method="post" className="max-w-xl mx-auto">
          <input type="email" placeholder="Enter your email" className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg"/>
          <button type="submit" className="w-full py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
            Subscribe
          </button>
        </form>
      </section>

       {/* Location */}
       <section className="bg-gray-950 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Find Us</h2>
        <p className="mb-2">📍 500 N Bell Ave #109, Denton, TX 76209</p>
        <p className="mb-2">📞 <a href="tel:+19406129127" className="underline text-yellow-400">+1 940-612-9127</a></p>
        <p className="mb-4">🕒 Open ⋅ Closes 7 PM</p>
        <iframe className="w-full max-w-3xl mx-auto rounded-xl" height="250" loading="lazy" allowFullScreen src="https://www.google.com/maps?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209&output=embed"></iframe>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 text-sm bg-black">
        © {new Date().getFullYear()} Fama Barber Shop & Beauty Salon.
      </footer>
    </main>
  );
}