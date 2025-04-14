
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Richiesta inviata",
        description: "Grazie per il tuo interesse! Ti contatteremo presto.",
        variant: "default",
      });
      setEmail("");
      setName("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contattaci" className="section bg-reminis-navy text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-reminis-blue/20 rounded-bl-[100px] blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-reminis-teal/20 rounded-tr-[100px] blur-3xl -z-10" />
      
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-6 font-medium">
              Contattaci
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Scopri come Reminis può migliorare<br />la vita dei tuoi cari
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Siamo qui per rispondere alle tue domande e aiutarti a scoprire come i nostri 
              occhiali intelligenti possono fare la differenza.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-elevated">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-reminis-blue/50 text-white"
                    placeholder="Mario Rossi"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-reminis-blue/50 text-white"
                    placeholder="esempio@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-reminis-blue/50 text-white resize-none"
                  placeholder="Raccontaci come possiamo aiutarti..."
                />
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-white text-reminis-navy rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:bg-reminis-cream/90 flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-reminis-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Invio in corso...
                    </>
                  ) : (
                    "Invia Richiesta"
                  )}
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm">
              Per assistenza immediata: <a href="tel:+390123456789" className="text-white hover:underline">+39 012 345 6789</a> o <a href="mailto:info@reminis.it" className="text-white hover:underline">info@reminis.it</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
