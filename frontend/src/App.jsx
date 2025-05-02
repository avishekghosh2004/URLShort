import React from "react";
import UrlShortenerForm from "./components/UrlShortenerForm";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <UrlShortenerForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
