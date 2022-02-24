import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MyNavbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import EventsPage from "./pages/EventsPage";
import StorePage from "./pages/StorePage";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
