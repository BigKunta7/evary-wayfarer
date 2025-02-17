import { useState, useEffect } from 'react';
import { Globe, Users, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
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
      {/* Hero Section */}
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

      {/* Values Section */}
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

      {/* Membership Section */}
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

      {/* Destinations Section */}
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

      {/* CTA Section */}
      <section className="py-24 bg-evary-brown text-white">
        <div className="container text-center">
          <h2 className="section-heading mb-6">Prêt à Vivre l'Expérience EVARY ?</h2>
          <p className="text-xl mb-8 text-evary-beige max-w-2xl mx-auto">
            Rejoignez notre communauté et commencez à créer des souvenirs inoubliables
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/membership"
              className="bg-evary-sage text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Devenir Membre
            </Link>
            <Link
              to="/early-access"
              className="bg-white text-evary-brown px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              1 Mois Offert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
