import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./layout";  
import Home from "./home";
import Blogs from "./blogs";
import Contact from "./contact";
import NoPage from "./nopage"; 


export default function Path() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/nopage" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
