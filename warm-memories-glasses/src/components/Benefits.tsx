
import { useRef, useEffect } from "react";

interface BenefitProps {
  title: string;
  description: string;
  icon: JSX.Element;
  index: number;
}

const Benefit = ({ title, description, icon, index }: BenefitProps) => {
  const benefitRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (benefitRef.current) {
                benefitRef.current.classList.add("opacity-100", "translate-x-0");
                benefitRef.current.classList.remove("opacity-0", index % 2 === 0 ? "translate-x-10" : "-translate-x-10");
              }
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (benefitRef.current) {
      observer.observe(benefitRef.current);
    }
    
    return () => {
      if (benefitRef.current) {
        observer.unobserve(benefitRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={benefitRef}
      className={`flex gap-5 items-start p-6 rounded-2xl bg-white shadow-soft transition-all duration-700 ease-out opacity-0 ${
        index % 2 === 0 ? "translate-x-10" : "-translate-x-10"
      }`}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-reminis-navy/10 flex items-center justify-center text-reminis-navy">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section id="benefici" className="section bg-gradient-to-b from-white to-reminis-cream/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-reminis-coral/10 text-reminis-coral text-sm mb-6 font-medium">
            Benefici
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Come miglioriamo la qualità della vita
          </h2>
          <p className="text-lg text-muted-foreground">
            I nostri occhiali intelligenti offrono vantaggi concreti sia per gli utenti
            che per i loro familiari e caregiver.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Benefit 
            title="Maggiore Autonomia" 
            description="Riduzione della dipendenza dall'assistenza continua, permettendo agli utenti di svolgere attività quotidiane con maggiore sicurezza e indipendenza."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            }
            index={0}
          />
          
          <Benefit 
            title="Sicurezza Potenziata" 
            description="Riduzione del rischio di smarrimento e confusione grazie ai sistemi di navigazione e riconoscimento integrati, per una vita quotidiana più sicura."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            }
            index={1}
          />
          
          <Benefit 
            title="Tranquillità per i Familiari" 
            description="L'app dedicata permette ai familiari di monitorare a distanza e aggiornare i dati, offrendo serenità e riducendo l'ansia legata all'assistenza."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.479m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
            }
            index={2}
          />
          
          <Benefit 
            title="Esperienza Personalizzata" 
            description="Il sistema di intelligenza artificiale apprende continuamente, adattando il supporto alle esigenze specifiche e ai modelli comportamentali dell'utente."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            }
            index={3}
          />
        </div>
        
        <div className="mt-16 bg-white p-8 md:p-10 rounded-3xl shadow-soft max-w-4xl mx-auto">
          <h3 className="text-2xl font-display font-semibold mb-6 text-center">
            Perché Reminis è unico?
          </h3>
          
          <ul className="space-y-4">
            {[
              "Un solo dispositivo integra supporto cognitivo e visivo.",
              "L'AI scrive direttamente sulle lenti, rendendo le informazioni immediatamente visibili.",
              "Figli e familiari possono monitorare a distanza e aggiornare i dati tramite app."
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-reminis-teal/20 flex items-center justify-center text-reminis-teal mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
