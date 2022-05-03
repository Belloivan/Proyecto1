import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Cart from "../components/Cart";
import Contact from "../components/Contact";
import Login from "../components/Login";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Heroes from "../components/Heroes";
import Redessociales from "../components/Redessociales";
import Vernombre from "../components/Vernombre"
import Banner2 from "../components/Banner2";



const RoutesNav = () => {

   return (
     <Router>
       
        <Layout>
        <Routes>
                
              <Route path="/" element= {< Home />} />
              <Route path="/about" element= {<About />} />
              <Route path="/contact" element= {<Contact />} />
              <Route path="/cart" element= {<Cart />} />
              <Route path="/login" element= {<Login />} />              

       </Routes>
       <div><Banner2/></div>
       <div><Vernombre/></div>
       <div><Heroes/></div>
       <div><Redessociales/> </div>
       <div><Footer/></div>

       </Layout>
     </Router>
);
}
export default RoutesNav