import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import SideMenu from "./components/SideMenu";
import {Provider} from 'react-redux';
import { pgStore } from "./redux/paginationRedux";
function App() {
  return (
    <Provider store = {pgStore}>
    <div className="App">
      <BrowserRouter>
        <SideMenu />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/property/:id"
              element={<PropertyDetailsPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
