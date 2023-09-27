import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import PDFViewScreen from './pages/PDFViewScreen';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Taskify from './pages/Taskify';
import Learnings from './pages/Learnings';

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/taskify" element={<Taskify />} />
          <Route path="/learnings" element={<Learnings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/pdf" element={<PDFViewScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <Pages />
  // </React.StrictMode>
);