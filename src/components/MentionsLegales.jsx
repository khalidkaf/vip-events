import React from 'react';
import Navbar from './Navbar'; // importe ta navbar

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar en haut */}
      <Navbar />

      {/* Contenu principal */}
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>
        <p className="mb-4">
          VIP Events Inc.<br />
          Adresse : 121 Rue des Remparts, 78550 Houdan, France<br />
          Email : contact@vip-events-inc.com<br />
          Téléphone : +33 6 33 69 33 51
        </p>
        <p className="mb-4">
          Le contenu de ce site est fourni à titre informatif. Toute reproduction, intégrale ou partielle, est interdite sans autorisation.
        </p>
        <p>
          Hébergeur : IONOS
        </p>
      </div>
    </div>
  );
};

export default MentionsLegales;
