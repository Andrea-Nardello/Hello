
import { Glasses, BrainCircuit, Compass, Eye, CloudCog } from "lucide-react";

const ProductDescription = () => {
  return (
    <section id="prodotto" className="py-20 bg-gradient-to-b from-white to-reminis-cream/30 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-2/3 h-1/3 bg-reminis-blue/5 rounded-br-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-reminis-blue/10 text-reminis-blue text-sm mb-6 font-medium">
            Il Nostro Prodotto
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Come Funzionano gli <span className="text-gradient">Occhiali Reminis</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            La tecnologia che rende possibile riscoprire i ricordi preziosi e vivere con maggiore autonomia
          </p>
        </div>

        {/* Product visualization */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <div className="absolute inset-0 bg-reminis-navy/5 rounded-2xl -z-10" />
              <img 
                src="/lovable-uploads/2dc77c41-b621-4e90-9f09-956d91fd02b2.png" 
                alt="Occhiali Reminis" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="text-2xl font-display font-semibold">
              Tecnologia Avanzata, Esperienza Semplice
            </h3>
            <p className="text-lg text-muted-foreground">
              Gli occhiali Reminis combinano l'intelligenza artificiale con un design elegante e confortevole, 
              creando un'esperienza intuitiva che si integra perfettamente nella vita quotidiana.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-reminis-blue/10 text-reminis-blue">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Intelligenza Artificiale Integrata</h4>
                  <p>Il sistema analizza l'ambiente circostante e fornisce suggerimenti in tempo reale direttamente sulle lenti.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-reminis-teal/10 text-reminis-teal">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Lenti Adattive</h4>
                  <p>Le lenti si adattano automaticamente alle esigenze visive dell'utente, compensando miopia e altri problemi di vista.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-reminis-coral/10 text-reminis-coral">
                  <CloudCog size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Sincronizzazione Cloud</h4>
                  <p>Tutte le informazioni sono sincronizzate con un'app dedicata che permette ai familiari di monitorare e aggiornare i dati.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* How it works */}
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
            Come Funziona nel Quotidiano
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 flex items-center justify-center bg-reminis-blue/10 text-reminis-blue rounded-full mb-4">
                <Glasses size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Indossa gli Occhiali</h4>
              <p className="text-muted-foreground">Leggeri e confortevoli, si indossano come normali occhiali da vista, senza alcuna complicazione.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 flex items-center justify-center bg-reminis-teal/10 text-reminis-teal rounded-full mb-4">
                <Eye size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Esplora il Mondo</h4>
              <p className="text-muted-foreground">La telecamera integrata riconosce volti, oggetti e luoghi, fornendo informazioni contestuali.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 flex items-center justify-center bg-reminis-coral/10 text-reminis-coral rounded-full mb-4">
                <Compass size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Ricevi Assistenza</h4>
              <p className="text-muted-foreground">Suggerimenti e informazioni vengono visualizzati direttamente sulle lenti in modo discreto e non invasivo.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 flex items-center justify-center bg-reminis-navy/10 text-reminis-navy rounded-full mb-4">
                <BrainCircuit size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Vivi con Autonomia</h4>
              <p className="text-muted-foreground">Goditi maggiore indipendenza grazie ai promemoria, alla navigazione assistita e al supporto continuo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
