import React from "react"; // ✅ ADD THIS LINE
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import RequestAidPage from "./pages/RequestAidPage";
import ThankYouPageReq from "./pages/ThankYouPageReq";
import ThankYouPageReq2 from "./pages/ThankYouPageReq2";
import DonationPage from "./pages/DonationPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    console.log(wallet);
  }, [wallet]);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar wallet={wallet} setWallet={setWallet} />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage wallet={wallet} setWallet={setWallet} />}
            />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/request-aid" element={<RequestAidPage />} />
            <Route path="/thank-you-req" element={<ThankYouPageReq />} />
            <Route path="/thank-you-req-2" element={<ThankYouPageReq2 />} />
            <Route path="/donate/:campaignId" element={<DonationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
