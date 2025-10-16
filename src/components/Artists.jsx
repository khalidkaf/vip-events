import React from "react";
import { Link } from "react-router-dom"; // Assure-toi que react-router-dom est installé

const artists = [
  {
    name: "Production musicale et technique",
    slug: "production-musicale",
    image:
      "/prodmusicale.jpeg",
    description:
      "Collaborons pour donner à votre music l'impact qu'elle mérite.",
  },
  {
    name: "Développement artistique",
    slug: "developpement-artistique",
    image:
      "/develop.jpeg",
    description: "Votre art mérite une carrière. Ensemble construisons-la.",
  },
];

const Artists = () => {
  return (
    <section id="artists" className="py-16 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Production Musicale
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {artists.map((artist, index) => (
            <Link
              to={`/artists/${artist.slug}`} // lien dynamique
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition block"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                <p className="text-gray-700">{artist.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
