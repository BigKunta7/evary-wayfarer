import { useState, useEffect } from 'react';
import { Globe, Users, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShowPopup(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const target = document.getElementById('cta-section');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const targetDate = new Date('2024-12-31T23:59:59').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const membershipTiers = [
    {
      name: "Basic",
      price: "24,90 €",
      period: "/mois",
      features: [
        "Matching basique",
        "Itinéraires simplifiés",
        "Notifications"
      ],
      highlight: false
    },
    {
      name: "Advanced",
      price: "64,90 €",
      period: "/mois",
      features: [
        "Matching avancé",
        "Choix des compagnons",
        "Priorisation"
      ],
      highlight: true
    },
    {
      name: "Premium",
      price: "129 €",
      period: "/mois",
      features: [
        "Gestionnaire dédié",
        "Suivi budgétaire",
        "Contenus exclusifs"
      ],
      highlight: false
    }
  ];

  const destinations = [
    { name: "Provence", country: "France" },
    { name: "Corse", country: "France" },
    { name: "Dune du Pilat", country: "France" },
    { name: "Italie", country: "Europe" },
    { name: "Norvège", country: "Europe" },
    { name: "Bali", country: "International" },
    { name: "Japon", country: "International" },
    { name: "Saint-Barth", country: "International" }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="container relative z-10 text-center">
          <p className="text-evary-beige text-lg mb-4 animate-fade-in-left">Bienvenue chez EVARY</p>
          <h1 className="hero-text text-white mb-6 animate-fade-in">
            Réinventez votre façon de voyager
          </h1>
          <p className="text-evary-beige text-xl max-w-2xl mx-auto mb-8 animate-fade-in">
            Des expériences de voyage uniques, déconnectées du quotidien, inclusives et co-construites.
          </p>
          <button className="bg-evary-sage text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300 animate-fade-in">
            Rejoignez l'aventure
          </button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="luxury-card text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-evary-sage" />
              <h3 className="text-xl font-semibold mb-2">Durabilité</h3>
              <p className="text-evary-stone">Voyages éco-responsables pensés pour minimiser notre empreinte</p>
            </div>
            <div className="luxury-card text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-evary-sage" />
              <h3 className="text-xl font-semibold mb-2">Inclusivité</h3>
              <p className="text-evary-stone">Des formules adaptées à tous les budgets et attentes</p>
            </div>
            <div className="luxury-card text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-evary-sage" />
              <h3 className="text-xl font-semibold mb-2">Engagement</h3>
              <p className="text-evary-stone">L'humain au cœur de chaque expérience</p>
            </div>
            <div className="luxury-card text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-evary-sage" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-evary-stone">Technologies modernes pour des voyages personnalisés</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-evary-beige">
        <div className="container">
          <h2 className="section-heading text-center mb-16">Nos Formules d'Abonnement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`luxury-card ${
                  tier.highlight 
                    ? 'transform scale-105 border-evary-sage' 
                    : ''
                }`}
              >
                <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-evary-stone">{tier.period}</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="w-2 h-2 bg-evary-sage rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-evary-sage text-white hover:bg-opacity-90'
                    : 'bg-evary-cream text-evary-brown hover:bg-evary-stone hover:text-white'
                }`}>
                  Choisir
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="section-heading text-center mb-16">Nos Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <div key={destination.name} className="luxury-card group hover:scale-105">
                <h4 className="text-xl font-semibold mb-1">{destination.name}</h4>
                <p className="text-evary-stone">{destination.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta-section" className="py-24 bg-evary-brown text-white relative">
        <div className="container text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center mb-12">
            <div className="luxury-card bg-white/10">
              <span className="block text-4xl font-bold mb-2">{countdown.days}</span>
              <span className="text-sm">Jours</span>
            </div>
            <div className="luxury-card bg-white/10">
              <span className="block text-4xl font-bold mb-2">{countdown.hours}</span>
              <span className="text-sm">Heures</span>
            </div>
            <div className="luxury-card bg-white/10">
              <span className="block text-4xl font-bold mb-2">{countdown.minutes}</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="luxury-card bg-white/10">
              <span className="block text-4xl font-bold mb-2">{countdown.seconds}</span>
              <span className="text-sm">Secondes</span>
            </div>
          </div>

          <h2 className="section-heading mb-6">Prêt à Vivre l'Expérience EVARY ?</h2>
          <p className="text-xl mb-8 text-evary-beige max-w-2xl mx-auto">
            Rejoignez notre communauté et commencez à créer des souvenirs inoubliables
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/membership"
              className="bg-evary-sage text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Rejoindre l'équipe
            </Link>
            <Link
              to="/early-access"
              className="bg-white text-evary-brown px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Je réserve mon abonnement
            </Link>
          </div>
        </div>

        {showPopup && (
          <div className="fixed bottom-0 left-0 right-0 bg-white p-4 transform transition-transform duration-500 ease-in-out translate-y-0 shadow-lg">
            <div className="container max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="text-evary-brown">
                    <p className="font-semibold">Lancement dans :</p>
                    <div className="flex space-x-2">
                      <span>{countdown.days}j</span>
                      <span>{countdown.hours}h</span>
                      <span>{countdown.minutes}m</span>
                      <span>{countdown.seconds}s</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Link
                    to="/membership"
                    className="bg-evary-sage text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
                  >
                    Rejoindre l'équipe
                  </Link>
                  <Link
                    to="/early-access"
                    className="bg-evary-brown text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
                  >
                    Je réserve mon abonnement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;
