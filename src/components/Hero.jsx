import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Bloc avec image de fond */}
      <section
        id="hero"
        className="relative bg-stone-100 bg-no-repeat bg-[length:80%] h-[60vh] flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/logo.png')"
        }}
      >
        <img
          src="/logo.jpg"
          alt="VIP Music Logo"
          className="mx-auto w-[550px] md:w-[600px] rounded-xl"
        />
      </section>

      {/* Bloc catégories EN DESSOUS de l'image de fond */}
      <section className="bg-black py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-4">
          {/* Catégorie 1 */}
          <div>
            <a href="#artists">
            <img
              src="/vip-music.jpg"
              alt="Production Musicale"
              className="mx-auto w-32 h-32 mb-2 rounded-xl"
               
            />
            <h3 className="text-xl font-semibold text-white">Production Musicale</h3>
            
            </a>
          </div>

          {/* Catégorie 2 */}
          <div>
            <a href="#events">
            <img
              src="/events.jpg"
              alt="Événements"
              className="mx-auto w-32 h-32 mb-2"
            />
            <h3 className="text-xl font-semibold text-white">Events Tours & Trips</h3>
            </a>
          </div>

          {/* Catégorie 3 */}
          <div>
            <a href="#transports">
            <img
              src="/transport.jpg"
              alt="Billets"
              className="mx-auto w-32 h-32 mb-2"
            />
            <h3 className="text-xl font-semibold text-white">Transport Rent & Services</h3>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
