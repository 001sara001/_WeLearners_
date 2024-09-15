import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TestPage from "./pages/TestPage";
import EnrollNow from "./pages/EnrollNow";
import WelcomePage from "./pages/WelcomePage";
import MenuCard from "./layouts/MenuCard";
import LearnMore from "./LearnMore/LearnMore";
import Quiz from "./pages/Quiz";
import Review from "./Review/Review";
import ContactUsPage from "./ContactUs/ContactUsPage";
import EnrollNowForEnglish from "./Enroll Now/Enroll-Now-For-English";
import EnrollNowForBangla from "./Enroll Now/Enroll-Now-For-Bangla";
import EnrollNowForJapanese from "./Enroll Now/Enroll-Now-For-Japanese";
import EnrollNowForTurkish from "./Enroll Now/Enroll-Now-For-Turkish";
import EnrollNowForKorean from "./Enroll Now/Enroll-Now-For-Korean";
import ThankYou from "./thank_you_page/ThankYou";
const App = () => {
  return (
    <Router>
      <div>
        <AppContent />
      </div>
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Show Navbar only on the homepage
  const shouldShowNavbar = location.pathname === "/";

  return (
    <div>
      {shouldShowNavbar && <Navbar />}
      <main>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<TestPage />} path="/quiz" />
          <Route element={<Quiz />} path="/quiz/start" />
          <Route path="/menu-card" element={<MenuCard />} />
          <Route element={<EnrollNow />} path="/enroll-now" />
          <Route element={<WelcomePage />} path="/welcomePage" />
          <Route element={<Review />} path="/reviews" />
          <Route element={<LearnMore />} path="/learn-more" />
          <Route element={<ContactUsPage />} path="/contact" />
          <Route path="/enroll-now-for-english" element={<EnrollNowForEnglish />} />
          <Route path="/enroll-now-for-bangla" element={<EnrollNowForBangla />} />
          <Route path="/enroll-now-for-japanese" element={<EnrollNowForJapanese />} />
          <Route path="/enroll-now-for-turkish" element={<EnrollNowForTurkish />} />
          <Route path="/enroll-now-for-korean" element={<EnrollNowForKorean />} />
          <Route path="/thank-you" element={<ThankYou  />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
