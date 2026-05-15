export default function ASAWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-6xl md:text-8xl font-extrabold text-red-600 tracking-wide">
          ASA 3D Designing
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl">
          Premium Architecture, Interior, 3D Modeling & Luxury Design Solutions in Pakistan.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <a
            href="https://wa.me/923260100198"
            className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
          >
            Contact on WhatsApp
          </a>

          <a
            href="mailto:ASA_3D_Designing@gmail.com"
            className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 md:px-16 bg-gray-950">
        <h2 className="text-5xl font-bold text-center text-red-500 mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: '3D Designing',
              desc: 'Modern and realistic 3D models for homes, offices, shops and commercial projects.'
            },
            {
              title: 'Interior Design',
              desc: 'Luxury interior themes with modern furniture and premium lighting concepts.'
            },
            {
              title: 'Architecture',
              desc: 'Complete architectural planning and creative building concepts.'
            },
            {
              title: 'Branding',
              desc: 'Professional branding solutions for companies and startups.'
            },
            {
              title: 'Office Design',
              desc: 'Premium office interiors that inspire clients and employees.'
            },
            {
              title: 'Product Visualization',
              desc: '3D product mockups and premium presentation visuals.'
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-black border border-red-500/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-3xl font-bold text-red-500 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 px-6 md:px-16 bg-black">
        <h2 className="text-5xl font-bold text-center text-red-500 mb-16">
          Our Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            'Luxury Office Design',
            'Modern House Interior',
            '3D Exterior Villa',
            'Premium Bedroom Theme',
            'Commercial Building Design',
            'Modern Kitchen Concept'
          ].map((project, index) => (
            <div
              key={index}
              className="h-72 rounded-3xl bg-gradient-to-br from-red-700 to-black flex items-end p-6 shadow-xl"
            >
              <h3 className="text-2xl font-bold">{project}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 md:px-16 bg-gray-950">
        <h2 className="text-5xl font-bold text-center text-red-500 mb-16">
          Pakistani Pricing Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Basic',
              price: 'Rs. 15,000',
              desc: 'Affordable package for middle-class clients and startups.'
            },
            {
              title: 'Professional',
              price: 'Rs. 50,000',
              desc: 'Perfect for offices, businesses and advanced projects.'
            },
            {
              title: 'Luxury',
              price: 'Rs. 150,000+',
              desc: 'Premium high-end luxury designs with full support.'
            }
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-black rounded-3xl border border-red-500 p-10 text-center shadow-2xl hover:scale-105 transition"
            >
              <h3 className="text-4xl font-bold text-red-500 mb-4">{plan.title}</h3>
              <p className="text-5xl font-extrabold mb-6">{plan.price}</p>
              <p className="text-gray-300">{plan.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 text-center bg-black">
        <h2 className="text-5xl font-bold text-red-500 mb-8">
          Contact ASA 3D Designing
        </h2>

        <p className="text-xl text-gray-300 mb-4">
          WhatsApp: 0326-0100-198
        </p>

        <p className="text-xl text-gray-300 mb-4">
          Instagram: @ASA_3D_Designing
        </p>

        <p className="text-xl text-gray-300 mb-10">
          Email: ASA_3D_Designing@gmail.com
        </p>

        <a
          href="https://wa.me/923260100198"
          className="bg-red-600 hover:bg-red-700 transition px-10 py-5 rounded-2xl text-xl font-bold shadow-lg"
        >
          Start Your Project
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-950 text-gray-400 border-t border-red-500/20">
        © 2025 ASA 3D Designing — Designed by Abdullah
      </footer>
    </div>
  )
}
-
