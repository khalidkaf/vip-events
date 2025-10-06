// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold">VIP Events Inc</h1>
//       <ul className="flex space-x-6 text-sm font-semibold">
//         {/* <li><a href="#hero" className="hover:text-yellow-400">Accueil</a></li> */}
//         <li><a href="#artists" className="hover:text-yellow-400">Music</a></li>
//         <li><a href="#events" className="hover:text-yellow-400">Events Tours & Trips</a></li>
//         <li><a href="#transports" className="hover:text-yellow-400">Transport Rent & Services</a></li>
//         <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">VIP Events Inc</h1>

      <ul className="flex space-x-6 text-sm font-semibold">
        {/* Tu peux décommenter si tu veux un lien vers le haut */}
        {/* <li>
          <HashLink smooth to="/#hero" className="hover:text-yellow-400">
            Accueil
          </HashLink>
        </li> */}

        <li>
          <HashLink smooth to="/#artists" className="hover:text-yellow-400">
            Music
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#events" className="hover:text-yellow-400">
            Events Tours & Trips
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#transports" className="hover:text-yellow-400">
            Transport Rent & Services
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact" className="hover:text-yellow-400">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
