import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import PageLoader from "./pages/PageLoader";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import SignUpPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./redux/redux";
import { useEffect } from "react";
import { useLogin } from "./hooks/useLogin";
import axios from "axios";
function App() {
  const { loginWith } = useLogin();
  const topProperties = useSelector((state) => state.topProperties);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const getUser = async () => {
	// 	try {
	// 		const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
	// 		const { data } = await axios.get(url, { withCredentials: true });
	// 		console.log(data)
  //     		} catch (err) {
	// 		console.log(err);
	// 	}
	// };


  useEffect(() => {
    if (!user) {
      const localUser = JSON.parse(localStorage.getItem('user'))
      if (localUser) {
        dispatch(setUser(localUser));
      }else{
        loginWith();
      }
    }
  }, [user, dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        {topProperties && <Navbar />}
        <div className="pages">
          <Routes>
            <Route path="/" element={topProperties ? <Home /> : <Navigate to="/loader"/>} />
            <Route path="/property/:id" element={<PropertyDetailsPage />} />
            <Route path="/loader" element={<PageLoader />} />
            <Route path="/user" element={user ? <UserPage /> : <Navigate to="/login"/>} />
            <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/user"/>} />
            <Route path="/signup" element={!user ? <SignUpPage /> : <Navigate to="/user"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
