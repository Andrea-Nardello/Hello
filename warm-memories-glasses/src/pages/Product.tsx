
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDescription from "@/components/ProductDescription";
import SalesInquiry from "@/components/SalesInquiry";

const Product = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main>
        <div className="pt-20"></div> {/* Spacer for fixed navbar */}
        <ProductDescription />
        <SalesInquiry />
      </main>
      <Footer />
    </div>
  );
};

export default Product;
