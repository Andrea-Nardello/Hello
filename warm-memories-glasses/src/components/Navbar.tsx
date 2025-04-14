
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    handleScroll(); // Check scroll position immediately
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Determine current page
  const isHomePage = location.pathname === '/';
  const isProductPage = location.pathname === '/prodotto';
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-soft" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-reminis-navy to-reminis-blue">
            Reminis
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10">
          <Link 
            to="/prodotto"
            className={cn(
              "transition-all duration-200 text-sm font-medium",
              isProductPage 
                ? "text-reminis-coral" 
                : "text-reminis-navy/80 hover:text-reminis-navy"
            )}
          >
            Prodotto
          </Link>
          
          {isHomePage && (
            <>
              {["Funzionalità", "Benefici", "Statistiche"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-reminis-navy/80 hover:text-reminis-navy transition-all duration-200 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </>
          )}
          
          <Link 
            to="/chi-siamo"
            className="text-reminis-coral text-sm font-medium hover:text-reminis-coral/80 transition-all duration-200"
          >
            Chi Siamo
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-6">
          <Button asChild variant="ghost" className="text-reminis-navy rounded-full hover:bg-reminis-navy/5">
            <Link to="/">
              <Home className="mr-1" size={16} />
              Home
            </Link>
          </Button>
          
          <Link 
            to="/prodotto" 
            className="bg-reminis-navy text-white rounded-full px-6 py-2.5 flex items-center gap-1 transition-all duration-300 hover:bg-reminis-blue hover:shadow-lg"
          >
            Scopri di più <ChevronRight size={16} />
          </Link>
        </div>
        
        <button className="block md:hidden text-reminis-navy p-2 rounded-full hover:bg-reminis-navy/5 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
