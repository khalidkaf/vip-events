import React from 'react';
import { sendForm } from '@emailjs/browser';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contactez-nous</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;

            // EmailJS client-side
            // SERVICE_ID: service_v233y6g
            // TEMPLATE_ID: template_8thr9j9
            // PUBLIC_KEY: QWJp8sNYF_QM7RAvI
            sendForm('service_9usvi7c', 'template_yvhqwi', form, 'BEL6o47IK9dbu8eFm')
              .then((result) => {
                console.log('EmailJS success', result);
                alert('Message envoyé !');
                form.reset();
              })
              .catch((err) => {
                console.error('EmailJS error:', err);
                try { console.error('EmailJS error (stringified):', JSON.stringify(err)); } catch (e) {}

                let details = [];
                if (err && err.status) details.push(`status: ${err.status}`);
                if (err && err.statusText) details.push(`statusText: ${err.statusText}`);
                if (err && err.text) details.push(`text: ${err.text}`);
                if (err && err.message) details.push(`message: ${err.message}`);
                if (err && err.response) { try { details.push(`response: ${JSON.stringify(err.response)}`); } catch (e) {} }
                if (err && err.xhr && err.xhr.response) details.push(`xhr.response: ${err.xhr.response}`);

                const alertMsg = details.length > 0
                  ? `Erreur lors de l'envoi. Détails: ${details.join(' | ')}`
                  : "Erreur lors de l'envoi. Vérifiez la console pour plus de détails.";

                alert(alertMsg);
              });
          }}
          className="bg-white rounded-lg shadow p-8 space-y-6"
        >
          {/* Honeypot anti-spam (invisible) */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          {/* Hidden recipient if your template uses a variable */}
          <input type="hidden" name="to_email" value="contact@vip-events-inc.com" />

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Votre nom"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Adresse Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
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
