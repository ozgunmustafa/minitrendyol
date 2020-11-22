import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {

  return (
    <div className="App">
      <Router>
         <Header />
         <Route path="/" exact component={Home} />
         <Route path="/sepetim" exact component={Cart} />
          <Route path="/urun-detay" exact component={ProductDetails} /> 
      </Router>
     
    
    </div>
  );
}

export default App;
