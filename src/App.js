import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import PageLoader from "./pages/PageLoader";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import SignUpPage from "./pages/SignUpPage";
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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
