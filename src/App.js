import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLoader from "./pages/PageLoader";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/redux";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/property/:id" element={<PropertyDetailsPage />} />
              <Route path="/" element={<PageLoader />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
