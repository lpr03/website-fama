export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center px-6"
        style={{
          backgroundImage: "url('/images/background.avif')",
        }}
      >
        <h1 className="text-6xl font-bold text-yellow-500 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Fama Barber Shop & Beauty Salon
        </h1>
        <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Style That Turns Heads – Denton, TX
        </p>
        <a
          href="tel:+19406129127"
          className="bg-yellow-500 text-black px-8 py-4 rounded-full text-xl hover:bg-yellow-400 transition-transform transform hover:scale-105"
        >
          Call Now
        </a>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Why Choose Us</h2>
        <div className="flex flex-wrap justify-center gap-8 text-left">
          {[
            {
              title: 'Experienced Staff',
              desc: 'Our team is highly trained with years of experience, ensuring quality service every time.'
            },
            {
              title: 'Affordable Prices',
              desc: 'Enjoy top-tier services without breaking the bank. Get great value for your money!'
            },
            {
              title: 'Stylish Cuts',
              desc: 'From trendy to classic, we provide personalized styles to suit your needs and preferences.'
            }
          ].map((item, i) => (
            <div key={i} className="w-80 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-yellow-500">{item.title}</h3>
              <p className="text-gray-400 mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gray-950 py-26 px-6 md:px-36 text-center text-white">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Services</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Haircuts",
            "Beard Trimming",
            "Hair Styling",
            "Shaves",
            "Coloring",
            "Kids Haircuts"
          ].map((service, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-yellow-500">{service}</h3>
              <p className="text-gray-400 mt-4">
                {service === "Haircuts" && "From classic to modern styles, we provide the perfect cut for you."}
                {service === "Beard Trimming" && "Perfectly styled beards with precision trimming and grooming."}
                {service === "Hair Styling" && "Achieve the best look for any occasion with our styling expertise."}
                {service === "Shaves" && "Luxurious shaves for the ultimate relaxation and smooth finish."}
                {service === "Coloring" && "From subtle highlights to bold colors, we offer professional hair coloring services."}
                {service === "Kids Haircuts" && "Friendly and fun haircuts for kids, ensuring they leave with a smile."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Barbers Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Meet Our Barbers</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: 'John Doe',
              specialization: "Men's Haircuts, Beard Styling",
              image: '/images/john.avif'
            },
            {
              name: 'Jane Smith',
              specialization: "Women's Styling, Hair Color",
              image: '/images/jane.avif'
            },
            {
              name: 'Mike Johnson',
              specialization: "Haircuts, Kids Haircuts",
              image: '/images/mike.avif'
            }
          ].map((barber, i) => (
            <div key={i} className="w-80 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
              <img src={barber.image} alt={barber.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-yellow-500">{barber.name}</h3>
              <p className="text-gray-400 mt-2">Specialization: {barber.specialization}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-16 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Client Reviews</h2>
        <h3 className="mt-4 font-semibold text-yellow-400">Rating: 4.6 stars (116+ reviews)</h3>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            { quote: "Great experience! The staff is friendly and talented. I always leave feeling fresh.", author: "John D." },
            { quote: "The best barbershop in Denton! They really know how to give a sharp haircut.", author: "Sarah W." },
            { quote: "I love their attention to detail and the way they style my hair. Worth every penny!", author: "Mark T." }
          ].map((review, i) => (
            <div key={i} className="w-80 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105">
              <p className="text-gray-300">"{review.quote}"</p>
              <p className="mt-4 font-semibold text-yellow-500">– {review.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            '/images/gallery1.avif',
            '/images/gallery2.avif',
            '/images/gallery3.avif'
          ].map((src, i) => (
            <img key={i} src={src} alt={`Gallery Image ${i + 1}`} className="rounded-xl" />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-950 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Book An Appointment</h2>
        <form action="#" method="post" className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
          <input type="text" placeholder="Your Name" className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg" rows="4"></textarea>
          <button type="submit" className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-yellow-500">Fama Barber Shop</h3>
              <p className="text-gray-400 mt-2">Where Style Meets Excellence</p>
            </div>
            <div className="flex justify-center gap-8 mb-6 md:mb-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>
            <div className="text-center md:text-right text-gray-400">
              <p>Call us at: <a href="tel:+19406129127" className="text-yellow-500">+1 (940) 612-9127</a></p>
              <p className="mt-2">123 Main St, Denton, TX 76201</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Fama Barber Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
