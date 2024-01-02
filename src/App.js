import React from "react";
import Analytics from "./component/Analytics";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Newsletter from "./component/Newsletter";
import Pricing from "./component/Pricing";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
