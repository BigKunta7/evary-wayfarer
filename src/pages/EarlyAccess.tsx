import { useState } from 'react';
import { Gift, Star } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const EarlyAccess = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [] as string[]
  });

  const subscriptionTypes = [
    {
      name: "Basic",
      price: "24,90 €",
      period: "/mois",
      yearlyPrice: "238,80 €/an",
      features: [
        "Matching basique",
        "Itinéraires simplifiés",
        "Notifications"
      ]
    },
    {
      name: "Advanced",
      price: "64,90 €",
      period: "/mois",
      yearlyPrice: "708 €/an",
      features: [
        "Matching avancé",
        "Choix des compagnons",
        "Priorisation"
      ]
    },
    {
      name: "Premium",
      price: "129 €",
      period: "/mois",
      yearlyPrice: "1 188 €/an",
      features: [
        "Gestionnaire dédié",
        "Suivi budgétaire",
        "Contenus exclusifs"
      ]
    }
  ];

  const destinations = [
    "France - Provence",
    "France - Corse",
    "France - Dune du Pilat",
    "Europe - Italie",
    "Europe - Norvège",
    "International - Bali",
    "International - Japon",
    "International - Saint-Barth"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('early_access')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            interests: formData.interests
          }
        ]);

      if (error) throw error;

      toast({
        title: "Inscription réussie !",
        description: "Votre mois gratuit sera activé dès le lancement.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        interests: []
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Erreur lors de l'inscription",
        description: "Un problème est survenu. Veuillez réessayer plus tard.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-evary-beige">
      <section className="relative py-24 bg-evary-brown text-white">
        <div className="container text-center">
          <h1 className="hero-text mb-6">Un Mois Offert</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Inscrivez-vous dès maintenant et bénéficiez d'un mois gratuit lors du lancement officiel d'EVARY
          </p>
          <div className="mt-12 flex justify-center">
            <div className="luxury-card bg-white/10 inline-flex items-center">
              <Gift className="w-8 h-8 mr-4 text-evary-sage" />
              <div className="text-left">
                <p className="text-lg font-semibold">1 Mois Gratuit</p>
                <p className="text-sm text-evary-beige">Pour les premiers inscrits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <h2 className="section-heading text-center mb-16">Nos Formules d'Abonnement</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {subscriptionTypes.map((sub, index) => (
              <div 
                key={sub.name}
                className={`luxury-card ${index === 1 ? 'border-evary-sage' : ''}`}
              >
                <h3 className="text-2xl font-semibold mb-4">{sub.name}</h3>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-evary-sage">{sub.price}</p>
                  <p className="text-evary-stone">ou {sub.yearlyPrice}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {sub.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Star className="w-5 h-5 text-evary-sage mr-2 mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container max-w-2xl">
          <h2 className="section-heading text-center mb-12">Pré-inscription Client</h2>
          
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
                <label className="block text-sm font-medium mb-2">Destinations d'intérêt</label>
                <div className="grid grid-cols-2 gap-3">
                  {destinations.map(destination => (
                    <label key={destination} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-evary-stone/20 text-evary-sage focus:ring-evary-sage"
                        checked={formData.interests.includes(destination)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData(prev => ({
                              ...prev,
                              interests: [...prev.interests, destination]
                            }));
                          } else {
                            setFormData(prev => ({
                              ...prev,
                              interests: prev.interests.filter(i => i !== destination)
                            }));
                          }
                        }}
                      />
                      <span className="text-sm">{destination}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 py-3 bg-evary-sage text-white rounded-full hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Envoi en cours...' : "S'inscrire pour le mois gratuit"}
            </button>

            <p className="mt-4 text-sm text-center text-evary-stone">
              Votre mois gratuit sera automatiquement activé lors du lancement officiel d'EVARY
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EarlyAccess;
