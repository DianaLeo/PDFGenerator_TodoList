import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import PDFViewScreen from './pages/PDFViewScreen';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Taskify from './pages/Taskify';
import Learnings from './pages/Learnings';
import GooglePlaces from './pages/GooglePlaces';

function Pages() {
  return (
    <BrowserRouter basename='/PDFGenerator_TodoList'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/learnings" element={<Learnings />} />
          <Route path="/googleplaces" element={<GooglePlaces />} />
          <Route path="/taskify" element={<Taskify />} />
          <Route path="/pdf" element={<PDFViewScreen />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
);