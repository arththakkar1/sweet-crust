export default function Hero() {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 1s ease-out forwards;
        }

        .animate-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animate-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .hero-section {
          animation: scaleIn 1.2s ease-out forwards;
          opacity: 0;
        }

        .hero-button {
          transition: all 0.3s ease;
        }

        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .hero-button:active {
          transform: translateY(0px);
        }
      `}</style>

      <section
        id="home"
        className="hero-section mt-32 md:mt-32 relative h-[300px] md:h-[600px] xl:min-h-[calc(100vh-80px)] m-5 md:m-10 flex items-center justify-center text-center bg-cover bg-center rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
            url('https://lh3.googleusercontent.com/aida-public/AB6AXuACdRjGSTa2uFHUgpUGoB-0xRwq8gB6CCTb_1ARp9WdEJRin5mlDdetiM0G2j7iDDONcTWyG5Zr5lx0zuchz_1g3p4iH4XhtRaYrPkYGPoFwLopXa8kJhMFjULuaHziEt9-FfLjQxO3tNJ2CCSUSRmkodYZy_TKjU02yPd2AEZ_FbUBdfyyQk4WV0qCytGrmyCI5MqrbRVONbswe-lOw3jEno6Pgk0dukiKoUazKvvQFSIl64wrwIvS-gwnHmPrHEfN1B5V5nH7jNU')`,
        }}
      >
        <div className="flex flex-col items-center gap-6 p-4">
          <h1 className="font-script text-4xl md:text-7xl text-white leading-tight drop-shadow-lg animate-fade-in-down">
            Sweet Crust Bakery
          </h1>
          <h2 className="text-sm md:text-xl text-white drop-shadow-md animate-fade-in-up animate-delay-200">
            Crafting delicious moments with every bite.
          </h2>
          <button className="hero-button bg-[var(--primary-color)] text-white font-bold py-3 px-8 rounded-lg hover:bg-[var(--soft-brown)] transition-colors duration-300 shadow-lg text-sm md:text-lg mt-4 animate-fade-in-up animate-delay-400">
            Explore Our Creations
          </button>
        </div>
      </section>
    </>
  );
}
