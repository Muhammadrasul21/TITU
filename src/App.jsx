// src/App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Partners from './pages/partners/Partners';
import College from './pages/college/College';
import News from './pages/news/News';
import Service from './pages/servise/Servise';
import Acceptance from './pages/acceptance/Acceptance';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/college" element={<College />} />
          <Route path="/news" element={<News />} />
          <Route path="/service" element={<Service />} />
          <Route path="/acceptance" element={<Acceptance />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
