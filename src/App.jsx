import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import Homes from "./pages/Homes";
import "./App.css";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Start from "./pages/Start";
import Recension from "./pages/Recension";
import Faq from "./pages/Faq";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homes />} /> 
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="results" element={<Results />} /> 
          <Route path="start" element={<Start />} />
          <Route path="recension" element={<Recension />} />    
          <Route path="faq" element={<Faq />} />  
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

