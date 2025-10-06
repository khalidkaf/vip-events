import React from "react";
import { useParams, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import events from "./eventsData";

const EventPage = () => {
  const { slug } = useParams();
  const event = events.find((a) => a.slug === slug);

  if (!event) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Event introuvable</h1>
        <Link to="/" className="text-blue-400 hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-80 object-cover rounded-2xl shadow-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">{event.title}</h1>
      <p className="text-lg text-gray-300 mb-6">{event.description}</p>

      {/* Texte détaillé si disponible */}
      {event.details && (
        <div
          className="prose prose-invert max-w-none text-gray-200 leading-relaxed mb-10"
          dangerouslySetInnerHTML={{ __html: event.details.replace(/\n/g, "<br/>") }}
        />
      )}

      {/* Boutons navigation */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link
          to="/"
          className="px-6 py-3 bg-gray-700 rounded-xl text-white font-semibold hover:bg-gray-800 transition text-center"
        >
          ← Retour à l'accueil
        </Link>

        <HashLink
          smooth
          to="/#contact"
          className="px-6 py-3 bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-700 transition text-center"
        >
          📩 Contacter
        </HashLink>
      </div>
    </div>
  );
};

export default EventPage;
