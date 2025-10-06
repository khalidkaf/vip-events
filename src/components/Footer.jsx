// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-gray-400 py-6 px-4 text-center">
//       <p className="text-sm">&copy; {new Date().getFullYear()} VIP Events Inc. Tous droits réservés.</p>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-2 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} VIP Events Inc. Tous droits réservés.
        </p>
        <Link
          to="/mentions-legales"
          className="text-sm text-gray-400 hover:text-yellow-500 transition"
        >
          Mentions légales
        </Link>
        <Link
          to="/paiement"
          className="text-sm text-gray-400 hover:text-yellow-500 transition"
        >
          Paiement
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
