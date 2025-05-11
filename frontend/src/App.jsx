import React from "react"; // ✅ ADD THIS LINE
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import ThankYouPage from "./pages/ThankYouPage";
import DonationPage from "./pages/DonationPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    console.log(wallet);
  }, [wallet]);

  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Navbar wallet={wallet} setWallet={setWallet} />
        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage wallet={wallet} setWallet={setWallet} />}
            />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
