import React from 'react';
import { Link } from "react-router-dom";

const events = [
  {
    title: 'Séjours et voyages',
    slug: "séjours",
    image: "/sejours.jpeg",
    description: 'Sur mesure, l\'Afrique de l\'Ouest et Centrale à votre rythme.',
  },
  {
    title: 'Services et déplacements',
    slug: "services",
    image: "/services.jpeg",
    description: 'Bougez en toute liberté.',
  },
  {
    title: 'Animation et activités',
    slug: "animations",
    image: "/animations.jpeg",
    description: 'Plongez au coeur de l\'expérience.',
  },
];

const Events = () => {
  return (
    <section id="events" className="py-16 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          VIP Events Tours et Trips
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
          <Link
            to={`/events/${event.slug}`}
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition block"
          >
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-60 object-cover"
              />
            <div
              // key={index}
              className="p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              {/* <p className="text-sm text-gray-500 mb-1">{event.date} – {event.location}</p> */}
              <p className="mb-4">{event.description}</p>
              <a
                href="#contact"
                className="inline-block bg-yellow-500 text-black font-medium px-4 py-2 rounded hover:bg-yellow-600 transition"
              >
                Réserver
              </a>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
