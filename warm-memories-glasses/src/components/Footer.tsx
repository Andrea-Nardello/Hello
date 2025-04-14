
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-reminis-navy py-12 text-white/80">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4">Reminis</h3>
            <p className="text-sm mb-6">
              Occhiali intelligenti con AI per supportare persone con demenza e problemi visivi, 
              migliorando autonomia e sicurezza.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`} 
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-4 h-4"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" 
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Esplora</h4>
            <ul className="space-y-2 text-sm">
              {["Funzionalità", "Benefici", "Statistiche", "Casi di studio", "Recensioni"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Supporto</h4>
            <ul className="space-y-2 text-sm">
              {["FAQ", "Contattaci", "Assistenza tecnica", "Garanzia", "Rimborso"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contatti</h4>
            <address className="text-sm not-italic space-y-2">
              <p>Via dell'Innovazione, 42</p>
              <p>20123 Milano, Italia</p>
              <p>
                <a href="tel:+390123456789" className="hover:text-white transition-colors">
                  +39 012 345 6789
                </a>
              </p>
              <p>
                <a href="mailto:info@reminis.it" className="hover:text-white transition-colors">
                  info@reminis.it
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {currentYear} Reminis. Tutti i diritti riservati.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#termini" className="hover:text-white transition-colors">Termini</a>
            <a href="#cookie" className="hover:text-white transition-colors">Cookie</a>
            <a href="https://luiss-my.sharepoint.com/:x:/g/personal/andrea_nardello_studenti_luiss_it/EcD5ILQpdytApnIkt8taK98BPthJ_iqbpo3HWxxA8GcrqA?e=J2WmzW" className="hover:text-white transition-colors">Business Plan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
