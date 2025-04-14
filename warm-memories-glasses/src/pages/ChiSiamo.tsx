
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ChiSiamo = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main>
        <div className="pt-20"></div> {/* Spacer for fixed navbar */}
        
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
                Chi Siamo
              </h1>
              <div className="w-20 h-1 bg-reminis-blue mx-auto mb-6"></div>
              <p className="text-lg text-reminis-navy/80 max-w-2xl mx-auto">
                Innovazione tecnologica e benessere sociale al servizio delle persone con difficoltà cognitive e visive.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-soft mb-12">
                <h2 className="text-2xl font-display font-bold mb-4 text-reminis-navy">La Nostra Storia</h2>
                <p className="mb-4">
                  Siamo un gruppo di studenti universitari appassionati di innovazione tecnologica e benessere sociale. Il nostro obiettivo è ideare soluzioni che coniughino ricerca accademica, intelligenza artificiale e cura della persona.
                </p>
                <p>
                  Ci unisce il desiderio di fornire supporto a chi convive con la demenza e a quanti hanno difficoltà visive, migliorandone la qualità di vita attraverso tecnologie indossabili all'avanguardia.
                </p>
              </div>
              
              <div className="bg-reminis-cream p-8 rounded-2xl shadow-soft mb-12">
                <h2 className="text-2xl font-display font-bold mb-4 text-reminis-navy">Il Nostro Progetto</h2>
                <p className="mb-4">
                  Il nostro progetto cardine consiste nello sviluppo di Occhiali Intelligenti con AI, in grado di integrare riconoscimento facciale, navigazione assistita e lenti adattive.
                </p>
                <p className="mb-4">
                  Questo dispositivo "all-in-one" proietta sulle lenti suggerimenti e promemoria in tempo reale, offrendo un aiuto concreto a chi deve gestire problemi di memoria o di vista.
                </p>
                <p>
                  Grazie all'app dedicata, i familiari possono personalizzare e aggiornare i contenuti, rendendo l'esperienza d'uso sempre più aderente alle esigenze individuali dell'utente.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center my-16">
                <div className="animate-slide-in-left">
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="La nostra missione" 
                    className="rounded-2xl shadow-elevated w-full h-80 object-cover"
                  />
                </div>
                <div className="animate-slide-in bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
                  <h2 className="text-3xl font-display font-bold mb-6 text-reminis-navy">La Nostra Mission</h2>
                  <p>
                    La nostra mission è mettere la tecnologia al servizio delle persone, fornendo strumenti intuitivi che promuovano autonomia, sicurezza e benessere. Crediamo nel potenziale dell'intelligenza artificiale applicato a contesti socio-sanitari, con l'obiettivo di semplificare la vita quotidiana di chi affronta sfide cognitive e visive.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center my-16">
                <div className="order-2 md:order-1 animate-slide-in bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
                  <h2 className="text-3xl font-display font-bold mb-6 text-reminis-navy">La Nostra Vision</h2>
                  <p className="mb-4">
                    La nostra vision va oltre il semplice aspetto funzionale: vogliamo far riaffiorare quei ricordi e quelle emozioni che scaldano il cuore, riportando alla mente momenti indimenticabili e ricreando la magia di ciò che abbiamo amato.
                  </p>
                  <p>
                    Attraverso la collaborazione tra i diversi ambiti di studio universitari e il confronto costante con i bisogni reali della comunità, puntiamo a trasformare la tecnologia in un alleato discreto ma potente, capace di migliorare la vita di milioni di persone.
                  </p>
                </div>
                <div className="order-1 md:order-2 animate-slide-in-left">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Il nostro team" 
                    className="rounded-2xl shadow-elevated w-full h-80 object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-soft my-16">
                <h2 className="text-3xl font-display font-bold mb-6 text-center text-reminis-navy">Il Nostro Team</h2>
                <p className="text-center mb-8">
                  Uniti dalla passione per l'innovazione e la ricerca, il nostro team multidisciplinare combina competenze in intelligenza artificiale, design, medicina e scienze sociali. Lavorando insieme, trasformiamo idee all'avanguardia in soluzioni tangibili per migliorare la vita delle persone.
                </p>
                
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  {["Ricerca e Sviluppo", "Design e UX", "AI e Data Science", "Assistenza Sanitaria"].map((area) => (
                    <div key={area} className="bg-reminis-cream p-6 rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                      <h3 className="font-bold mb-2 text-reminis-navy">{area}</h3>
                      <p className="text-sm text-reminis-navy/70">Esperti in {area.toLowerCase()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
