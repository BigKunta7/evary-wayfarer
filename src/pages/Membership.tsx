
import { useState, useEffect } from 'react';
import { Clock, Check } from 'lucide-react';

const Membership = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: ''
  });

  // Set countdown to December 31, 2024
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

  const membershipTypes = [
    {
      type: "Membre actif",
      price: "100 €/mois",
      yearlyPrice: "900 €/an",
      benefits: [
        "Participation à la gestion stratégique",
        "Accès aux outils exclusifs",
        "Réunions régulières",
        "Réductions sur les voyages"
      ]
    },
    {
      type: "Membre bienfaiteur",
      price: "200 €/mois",
      yearlyPrice: "1 500 €/an",
      benefits: [
        "Soutien des projets majeurs",
        "Accès prioritaire aux expériences",
        "Avantages premium",
        "Événements exclusifs"
      ]
    },
    {
      type: "Membre adhérent",
      price: "20 €/mois",
      yearlyPrice: "150 €/an",
      benefits: [
        "Participation vie associative",
        "Réductions membres",
        "Réunions virtuelles",
        "Engagement ponctuel"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add toast notification
    alert('Merci pour votre inscription ! Nous vous contacterons bientôt.');
  };

  return (
    <div className="min-h-screen bg-evary-beige">
      {/* Hero Section with Countdown */}
      <section className="relative py-24 bg-evary-brown text-white">
        <div className="container">
          <h1 className="hero-text text-center mb-12">Rejoignez EVARY</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
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
          
          <p className="text-center mt-8 text-xl">
            avant le lancement officiel d'EVARY
          </p>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-24">
        <div className="container">
          <h2 className="section-heading text-center mb-16">Nos Statuts de Membre</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTypes.map((membership) => (
              <div key={membership.type} className="luxury-card">
                <h3 className="text-2xl font-semibold mb-4">{membership.type}</h3>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-evary-sage">{membership.price}</p>
                  <p className="text-evary-stone">ou {membership.yearlyPrice}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {membership.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <Check className="w-5 h-5 text-evary-sage mr-2 mt-1 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setFormData(prev => ({...prev, membershipType: membership.type}))}
                  className="w-full py-3 bg-evary-brown text-white rounded-full hover:bg-opacity-90 transition-all"
                >
                  Choisir ce statut
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 bg-white">
        <div className="container max-w-2xl">
          <h2 className="section-heading text-center mb-12">Pré-inscription Membre</h2>
          
          <form onSubmit={handleSubmit} className="luxury-card">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-evary-stone/20 focus:outline-none focus:ring-2 focus:ring-evary-sage"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-evary-stone/20 focus:outline-none focus:ring-2 focus:ring-evary-sage"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-evary-stone/20 focus:outline-none focus:ring-2 focus:ring-evary-sage"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Statut souhaité</label>
                <select
                  required
                  className="w-full px-4 py-2 rounded-lg border border-evary-stone/20 focus:outline-none focus:ring-2 focus:ring-evary-sage"
                  value={formData.membershipType}
                  onChange={(e) => setFormData(prev => ({...prev, membershipType: e.target.value}))}
                >
                  <option value="">Sélectionnez un statut</option>
                  {membershipTypes.map(membership => (
                    <option key={membership.type} value={membership.type}>
                      {membership.type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 py-3 bg-evary-sage text-white rounded-full hover:bg-opacity-90 transition-all"
            >
              Pré-inscription
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Membership;
