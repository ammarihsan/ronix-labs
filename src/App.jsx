import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import ServiceDetails from './pages/ServiceDetails';
import TeamDetails from './pages/TeamDetails';
import ProjectDetails from './pages/ProjectDetails';
import BlogDetails from './pages/BlogDetails';
import AboutTwo from './pages/AboutTwo';
import BlogTwo from './pages/BlogTwo';
import ProjectTwo from './pages/ProjectTwo';
import ServiceTwo from './pages/ServiceTwo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about-2" element={<AboutTwo />} />
        <Route path="/services-2" element={<ServiceTwo />} />
        <Route path="/projects-2" element={<ProjectTwo />} />
        <Route path="/blog-2" element={<BlogTwo />} />
        <Route path="*" element={<NotFound />} />
        {/* Add more routes as pages are converted */}
      </Routes>
    </Router>
  );
}

export default App;
