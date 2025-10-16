import React from 'react';
import { Link } from "react-router-dom";

const transports = [
  {
    title: 'Célébrations et Evènements',
    slug: 'célébrations',
    image: '/celebration.jpeg',
    description: 'De l\'idée à la célébration, une organisation sans fausse note.',
  },
  {
    title: 'Production de spectacles',
    slug: 'production',
    image: '/production.jpeg',
    description: 'Nous gérons les coulisses, vous brillez sur scène.',
  },
  // {
  //   title: 'Drake',
  //   image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
  //   description: 'Hitmaker international et showman hors pair.',
  // },
  // {
  //   title: 'Drake',
  //   image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
  //   description: 'Hitmaker international et showman hors pair.',
  // },
];

const Transports = () => {
  return (
    <section id="transports" className="py-16 px-6 bg-blue-1000 text-white-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          VIP Tansport Rent et Services
        </h2>
        

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {transports.map((transport, index) => (
            <Link
              to={`/transports/${transport.slug}`}
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition block"
            >
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={transport.image}
                alt={transport.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{transport.title}</h3>
                <p className="text-gray-700">{transport.description}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transports;
