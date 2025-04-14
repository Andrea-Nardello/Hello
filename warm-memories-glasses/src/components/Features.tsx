
import { useRef, useEffect } from "react";

interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
  delay: number;
}

const Feature = ({ title, description, icon, delay }: FeatureProps) => {
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-4");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={featureRef}
      className="feature-card opacity-0 translate-y-4 transition-all duration-700 ease-out"
    >
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-reminis-blue to-reminis-teal/70 flex items-center justify-center text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="funzionalità" className="section bg-reminis-cream/30 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-reminis-navy/10 text-reminis-navy text-sm mb-6 font-medium">
            Funzionalità
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Supporto intelligente per la vita quotidiana
          </h2>
          <p className="text-lg text-muted-foreground">
            Sviluppiamo occhiali intelligenti con AI per supportare persone con demenza e problemi visivi, 
            migliorando autonomia e sicurezza.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Feature 
            title="Supporto alla Memoria" 
            description="Riconoscimento facciale e suggerimenti in tempo reale per aiutarti a ricordare nomi e relazioni."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082m0 0a24.301 24.301 0 0 0-4.5 0m0 0v5.714c0 .597-.237 1.17-.659 1.591L5 14.5M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.961 48.961 0 0 1-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            }
            delay={100}
          />
          
          <Feature 
            title="Gestione Attività Quotidiane" 
            description="Promemoria per farmaci, appuntamenti e routine giornaliere, visualizzati direttamente sulle lenti."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              </svg>
            }
            delay={200}
          />
          
          <Feature 
            title="Navigazione Assistita" 
            description="Sistema GPS integrato che guida l'utente in modo sicuro, riducendo il rischio di smarrimento."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
              </svg>
            }
            delay={300}
          />
          
          <Feature 
            title="Supporto alla Vista" 
            description="Lenti integrate per compensare miopia e altre deficienze visive, migliorando la qualità della vita."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            }
            delay={400}
          />
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block glass-card p-6 rounded-2xl max-w-3xl">
            <p className="text-reminis-navy/80 italic font-display text-lg">
              "Il nostro prodotto integra riconoscimento facciale, navigazione assistita e lenti adattive, proiettando 
              sulle lenti suggerimenti e promemoria in tempo reale."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
