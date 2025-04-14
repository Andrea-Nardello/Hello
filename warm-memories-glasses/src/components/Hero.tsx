
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => {
        imageRef.current?.classList.add("image-blur-loading");
      };
    }
  }, []);

  return (
    <section className="pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-reminis-cream rounded-bl-[100px] -z-10 opacity-70" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-reminis-blue/5 rounded-tr-[100px] -z-10" />
      
      <div className="container">
        {/* Main hero image - now full width at the top */}
        <div className="mb-12 animate-fade-in">
          <div className="relative mx-auto max-w-4xl">
            <div className="w-full h-full absolute -top-4 -right-4 bg-reminis-blue/10 rounded-2xl animate-float" />
            <img 
              ref={imageRef}
              src="/lovable-uploads/2dc77c41-b621-4e90-9f09-956d91fd02b2.png" 
              alt="Reminis - Occhiali Intelligenti" 
              className="w-full h-auto rounded-2xl shadow-elevated relative z-10"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Hero content - now below the image */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in-delay">
          <div className="inline-block px-4 py-1 rounded-full bg-reminis-blue/10 text-reminis-blue text-sm mb-6 font-medium">
            Occhiali Intelligenti
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Riscopri i tuoi
            <span className="text-gradient block">ricordi preziosi</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            La nostra vision è far riaffiorare quei ricordi e quelle emozioni che scaldano il cuore, 
            riportandoci a momenti indimenticabili.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/prodotto" className="bg-reminis-navy text-white rounded-full px-8 py-3 text-center animated-button shadow-button">
              Scopri come
            </Link>
            <a href="#funzionalità" className="bg-white text-reminis-navy border border-reminis-navy/20 rounded-full px-8 py-3 text-center hover:bg-reminis-navy/5 transition-colors duration-300">
              Esplora le funzionalità
            </a>
          </div>
        </div>
        
        {/* Additional images gallery - updated with elderly women with grandchildren */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-delay">
          <div className="rounded-xl overflow-hidden shadow-soft">
            <img 
              src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Nonna che legge una storia al nipote"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-soft">
            <img 
              src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Nonna che abbraccia i nipoti"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-soft">
            <img 
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Nonna che mostra foto ai nipoti"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
