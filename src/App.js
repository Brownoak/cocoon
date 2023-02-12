import Menu from "./components/Menu";
import "./app.css";
import "./index.css";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import AboutCard from "./components/card/AboutCard";
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <Header/>

      <div className="flex flex-col ">
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/details" element={<ProductDetail/>}></Route>
        </Routes>
        
        {/* <ProductDetail /> */}
        {/* <AboutCard/> */}
        {/* <Login/> */}
        {/* <Cart/> */}
        

      </div>
    </>
  );
}

export default App;
