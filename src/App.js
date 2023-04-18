import { ConfigProvider } from "antd";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landingPage/landingPage";
import TourDetailPage from "./pages/tourDetailPage/tourDetailPage";
import AllToursPage from "./pages/allTours/allToursPage";
import MyToursPage from "./pages/myToursPage/myToursPage";
import ConfirmTourPage from "./pages/confirmTourPage/confirmTourPage";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F16B51",
        },
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="tour-detail" element={<TourDetailPage />} />
        <Route path="all-tours" element={<AllToursPage />} />
        <Route path="my-tours" element={<MyToursPage />} />
        <Route path="confirm-tour" element={<ConfirmTourPage />} />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
