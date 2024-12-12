// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { HeroSection } from "./Components/hero";
import { AboutSection } from "./Components/About";
import { NavbarSection } from "./Components/NavbarSection";
import { ProductSection } from "./Components/Products";
import { ContactSection } from "./Components/Contact";
import ServicesPage from "./Components/Service";

function App() {
  return (
    <>
      <div>
        <NavbarSection />
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <ServicesPage />
        <ContactSection />
        {/* Footer */}
        <footer className="text-white text-center py-3">
          <p>&copy; 2024 Jewelry Brand. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
