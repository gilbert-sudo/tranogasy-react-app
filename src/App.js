import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import PageLoader from "./pages/PageLoader";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import UserPage from "./pages/UserPage";
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
            <Route path="/" element={topProperties ? <Home /> : <Navigate to="/loader"/>} />
            <Route path="/property/:id" element={<PropertyDetailsPage />} />
            <Route path="/loader" element={<PageLoader />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
