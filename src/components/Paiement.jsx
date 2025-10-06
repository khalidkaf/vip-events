import React from "react";
import Navbar from "./Navbar";

const Paiement = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar en haut */}
      <Navbar />

      {/* Contenu principal */}
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Paiement</h1>
        <p className="mb-4">
          Ici, vos clients pourront effectuer le paiement de leurs réservations.
        </p>
        <p className="mb-4">
          Vous pouvez intégrer votre solution de paiement préférée (Stripe, PayPal, etc.) dans cette page.
        </p>

        {/* Exemple de bouton de paiement fictif */}
        <button className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition">
          Payer maintenant
        </button>
      </div>
    </div>
  );
};

export default Paiement;
