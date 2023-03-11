import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideMenu />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/PropertyDetailsPage"
              element={<PropertyDetailsPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
