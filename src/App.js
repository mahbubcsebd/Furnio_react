import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/global/Footer';
import Header from './components/global/Header';
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import Home2 from "./components/pages/Home2";
import Home3 from "./components/pages/Home3";
import Shop from "./components/pages/Shop";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/home2"
            element={<Home2 />}
          />
          <Route
            path="/home3"
            element={<Home3 />}
          />
          <Route
            path="/blog"
            element={<Blog />}
          />
          <Route
            path="/shop"
            element={<Shop />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
