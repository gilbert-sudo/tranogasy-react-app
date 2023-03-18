import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLoader from "./pages/PageLoader";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const topProperties = useSelector((state) => state.topProperties);

  return (
    <div className="App">
      <BrowserRouter>
        {topProperties && <Navbar />}
        <div className="pages">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetailsPage />} />
            <Route path="/" element={<PageLoader />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
