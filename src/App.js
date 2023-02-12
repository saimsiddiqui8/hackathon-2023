import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart"
import NavBar from "./component/NavBar";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Admin from "./component/Admin/Admin";

function App() {

 
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      {/* <Cart/> */}
      {/* <SignUp /> */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>

  );
}

export default App;
