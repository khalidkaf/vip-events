import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contactez-nous
        </h2>

        <form className="bg-white rounded-lg shadow p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Votre nom"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Adresse Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Votre message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
