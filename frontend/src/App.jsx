import React from "react";
import Explore from "./pages/explore.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import FAQ from "./pages/FAQ.jsx";
import NotFound from "./pages/NotFound.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        {/* Render CustomCursor */}

        {/* <Navbar wallet={wallet} setWallet={setWallet} /> */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home /*wallet={wallet} setWallet={setWallet}*/ />}
            />
            {/* <Route path="/marketplace" />
            <Route path="/create" /> */}
            <Route path="/explore" element={<Explore />} />
            {/* <Route path="/donate/:campaignId" element={<DonationPage />} />

            <Route path="/thank-you-req" element={<ThankYouPageReq />} />
            <Route path="/thank-you-req-2" element={<ThankYouPageReq2 />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQ />} />
            {/* <Route path="/donate/:campaignId" element={<DonationPage />} />
            <Route path="/request-aid" element={<RequestAidPage />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Chatbot and Footer Components
        <MyChatbot />
        <Footer />
        <ScrollToTop /> */}
      </div>
      {/* <GTranslateLoader /> */}
    </BrowserRouter>
  );
}

export default App;
