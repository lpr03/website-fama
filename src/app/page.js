"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
});

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center px-6"
        style={{ backgroundImage: "url('/images/background.avif')" }}
      >
        <motion.div initial="hidden" animate="show" variants={staggerContainer}>
          <motion.h1 className="text-6xl font-bold text-yellow-500 mb-6" {...fadeIn(0.2)}>
            Fama Barber Shop &amp; Beauty Salon
          </motion.h1>
          <motion.p className="text-xl mb-6" {...fadeIn(0.4)}>
            Style That Turns Heads – Denton, TX
          </motion.p>
          <motion.a
            href="tel:+19406129127"
            className="bg-yellow-500 text-black px-8 py-4 rounded-full text-xl hover:bg-yellow-400 transition-transform transform hover:scale-105"
            {...fadeIn(0.6)}
          >
            Call Now
          </motion.a>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 text-center max-w-7xl mx-auto">
        <motion.h2 className="text-3xl font-bold text-yellow-400 mb-6" {...fadeIn(0.1)}>
          Why Choose Us
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-8 text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {[
            {
              title: "Experienced Staff",
              desc: "Our team is highly trained with years of experience, ensuring quality service every time.",
            },
            {
              title: "Affordable Prices",
              desc: "Enjoy top-tier services without breaking the bank. Get great value for your money!",
            },
            {
              title: "Stylish Cuts",
              desc: "From trendy to classic, we provide personalized styles to suit your needs and preferences.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="w-80 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105"
              {...fadeIn(i * 0.4)}
            >
              <h3 className="text-xl font-semibold text-yellow-500">{item.title}</h3>
              <p className="text-gray-400 mt-4">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
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
            "Kids Haircuts",
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105"
              {...fadeIn(i * 0.1)}
            >
              <h3 className="text-xl font-semibold text-yellow-500">{service}</h3>
              <p className="text-gray-400 mt-4">
                {{
                  Haircuts: "From classic to modern styles, we provide the perfect cut for you.",
                  "Beard Trimming": "Perfectly styled beards with precision trimming and grooming.",
                  "Hair Styling": "Achieve the best look for any occasion with our styling expertise.",
                  Shaves: "Luxurious shaves for the ultimate relaxation and smooth finish.",
                  Coloring:
                    "From subtle highlights to bold colors, we offer professional hair coloring services.",
                  "Kids Haircuts":
                    "Friendly and fun haircuts for kids, ensuring they leave with a smile.",
                }[service]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Barbers Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Meet Our Barbers</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: "John Doe",
              specialization: "Men's Haircuts, Beard Styling",
              image: "/images/john.avif",
            },
            {
              name: "Jane Smith",
              specialization: "Women's Styling, Hair Color",
              image: "/images/jane.avif",
            },
            {
              name: "Mike Johnson",
              specialization: "Haircuts, Kids Haircuts",
              image: "/images/mike.avif",
            },
          ].map((barber, i) => (
            <motion.div
              key={i}
              className="w-80 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105"
              {...fadeIn(i * 0.2)}
            >
              <Image
                src={barber.image}
                alt={barber.name}
                width={300}
                height={142}
                className="rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-yellow-500">{barber.name}</h3>
              <p className="text-gray-400 mt-2">Specialization: {barber.specialization}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-16 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Client Reviews</h2>
        <h3 className="mt-4 font-semibold text-yellow-400">Rating: 4.6 stars (116+ reviews)</h3>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            {
              quote:
                "Great experience! The staff is friendly and talented. I always leave feeling fresh.",
              author: "John D.",
            },
            {
              quote:
                "The best barbershop in Denton! They really know how to give a sharp haircut.",
              author: "Sarah W.",
            },
            {
              quote:
                "I love their attention to detail and the way they style my hair. Worth every penny!",
              author: "Mark T.",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              className="w-80 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-transform transform hover:scale-105"
              {...fadeIn(i * 0.2)}
            >
              <p className="text-gray-300">"{review.quote}"</p>
              <p className="mt-4 font-semibold text-yellow-500">– {review.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["/images/gallery1.avif", "/images/gallery2.avif", "/images/gallery3.avif"].map(
            (src, i) => (
              <motion.div key={i} {...fadeIn(i * 0.1)}>
                <Image src={src} alt={`Gallery Image ${i + 1}`} width={400} height={300} className="rounded-xl" />
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-950 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Book An Appointment</h2>
        <motion.form
          action="#"
          method="post"
          className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg"
          {...fadeIn(0.2)}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </motion.form>
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
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>
            <div className="text-center md:text-right text-gray-400">
              <p>
                Call us at:{" "}
                <a href="tel:+19406129127" className="text-yellow-500">
                  +1 (940) 612-9127
                </a>
              </p>
              <p className="mt-2">123 Main St, Denton, TX 76201</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Fama Barber Shop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
