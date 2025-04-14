
import { useRef, useEffect, useState } from "react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const Stat = ({ value, suffix, label, delay }: StatProps) => {
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);
  const counted = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted.current) {
            setTimeout(() => {
              counted.current = true;
              
              // Count up animation
              let startValue = 0;
              const duration = 2000; // ms
              const increment = Math.ceil(value / (duration / 20)); // Update every 20ms
              const timer = setInterval(() => {
                startValue += increment;
                if (startValue > value) {
                  startValue = value;
                  clearInterval(timer);
                }
                setCount(startValue);
              }, 20);
              
              // Add animation classes
              if (statRef.current) {
                statRef.current.classList.add("opacity-100", "translate-y-0");
                statRef.current.classList.remove("opacity-0", "translate-y-10");
              }
            }, delay);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    if (statRef.current) {
      observer.observe(statRef.current);
    }
    
    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [value, delay]);

  return (
    <div 
      ref={statRef}
      className="text-center p-4 opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-reminis-navy mb-2">
        {count.toLocaleString()}<span className="text-reminis-blue">{suffix}</span>
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

const Statistics = () => {
  return (
    <section id="statistiche" className="section relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-reminis-teal/5 rounded-br-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-reminis-blue/5 rounded-tl-[100px] -z-10" />
      
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-reminis-teal/10 text-reminis-teal text-sm mb-6 font-medium">
            Statistiche
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Perché il nostro lavoro è importante
          </h2>
          <p className="text-lg text-muted-foreground">
            I dati mostrano una crescente necessità di soluzioni innovative per supportare
            persone con demenza e problemi visivi.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Stat value={55} suffix="M+" label="Persone con demenza nel mondo" delay={100} />
          <Stat value={70} suffix="%" label="Caregiver con alto livello di stress" delay={200} />
          <Stat value={30} suffix="%" label="Anziani con problemi visivi" delay={300} />
          <Stat value={1.2} suffix="M" label="Persone con demenza in Italia" delay={400} />
        </div>
        
        <div className="bg-reminis-cream/30 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">
            In Italia: proiezioni e mercato potenziale
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-reminis-navy text-2xl md:text-3xl font-bold mb-2">1.6M</div>
              <p className="text-sm text-muted-foreground">Persone con demenza entro il 2030</p>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-reminis-navy text-2xl md:text-3xl font-bold mb-2">2.2M</div>
              <p className="text-sm text-muted-foreground">Persone con demenza entro il 2050</p>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-reminis-navy text-2xl md:text-3xl font-bold mb-2">4M</div>
              <p className="text-sm text-muted-foreground">Caregiver familiari (mercato B2C)</p>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-reminis-navy text-2xl md:text-3xl font-bold mb-2">12K+</div>
              <p className="text-sm text-muted-foreground">Strutture assistenziali (mercato B2B)</p>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Fonte: Osservatorio Demenze dell'Istituto Superiore di Sanità, OMS, Alzheimer's Association, European Society of Ophthalmology
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
