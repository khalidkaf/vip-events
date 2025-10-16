import React from 'react';
import Navbar from './Navbar'; // importe ta navbar

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white"
    style={{ backgroundColor: '#1F7CAB' }} // ✅ couleur personnalisée
    >
      {/* Navbar en haut */}
      <Navbar />

      {/* Contenu principal */}
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>
        <p className="mb-4">
          Dénomination sociale : VIP Events Inc.<br />
          Email : contact@vip-events-inc.com<br />
          SIREN : 944 065 382<br />
          SIRET (siège) : 944 065 382 00011<br /> 
          Forme juridique : SASU, société par actions simplifiée unipersonnelle<br />
          Numéro de TVA : FR52944065382<br />
          Inscription au RCS : INSCRIT  (au greffe de VERSAILLES , le 06/05/2025 )<br />
          Numéro RCS : 944 065 382 R.C.S. Versailles<br /> 
          Capital social : 200,00 €<br />

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
