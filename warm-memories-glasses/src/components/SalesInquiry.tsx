
import { Button } from "@/components/ui/button";
import { ExternalLink, ClipboardCheck } from "lucide-react";

const SalesInquiry = () => {
  return (
    <section id="questionario" className="py-20 bg-white overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-reminis-cream rounded-tl-[100px] -z-10 opacity-70" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-reminis-coral/10 text-reminis-coral text-sm mb-6 font-medium">
            Partecipa al Questionario
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Aiutaci a <span className="text-gradient">Migliorare Reminis</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            La tua opinione è importante per noi. Partecipa al nostro questionario e contribuisci allo sviluppo dei nostri occhiali intelligenti.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white shadow-elevated rounded-3xl p-8 md:p-12 border border-reminis-cream/50">
            <ClipboardCheck className="w-16 h-16 mx-auto mb-6 text-reminis-blue" />
            <h3 className="text-2xl font-display font-semibold mb-4">Questionario Reminis</h3>
            <p className="text-muted-foreground mb-8">
              Il questionario richiede solo pochi minuti. Le tue risposte ci aiuteranno a creare un prodotto migliore per te e per i tuoi cari.
            </p>
            
            <a 
              href="https://za5cu8pnx13.typeform.com/to/wFwj7J0o" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-reminis-navy text-white py-4 px-8 rounded-full font-medium text-lg transition-all duration-300 hover:bg-reminis-blue hover:shadow-lg"
            >
              Partecipa <ExternalLink size={18} />
            </a>
            
            <p className="mt-6 text-sm text-muted-foreground">
              Il questionario è anonimo e i dati raccolti saranno utilizzati solo per scopi di ricerca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesInquiry;
