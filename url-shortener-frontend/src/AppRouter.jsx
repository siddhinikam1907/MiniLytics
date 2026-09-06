import React from "react";
import ShortenUrlPage from "./components/ShortenUrlPage.jsx";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import DashboardLayout from "./components/Dashboard/DashboardLayout.jsx";

import "./App.css";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./PrivateRoute.jsx";

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Toaster position="bottom-center" />

      <Routes>
        {/* Home */}
        <Route path="/" element={<LandingPage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* Register */}
        <Route
          path="/register"
          element={
            <PrivateRoute publicPage={true}>
              <RegisterPage />
            </PrivateRoute>
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            <PrivateRoute publicPage={true}>
              <LoginPage />
            </PrivateRoute>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute publicPage={false}>
              <DashboardLayout />
            </PrivateRoute>
          }
        />

        {/* Short URL */}
        {/* Example: https://minilytics.netlify.app/ABC123 */}
        <Route path="/:url" element={<ShortenUrlPage />} />

        {/* Error */}
        <Route path="/error" element={<ErrorPage />} />

        {/* Any unknown URL */}
        <Route
          path="*"
          element={
            <ErrorPage message="We can't seem to find the page you're looking for" />
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRouter;
