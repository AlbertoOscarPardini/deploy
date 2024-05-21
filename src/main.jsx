import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { SerieInfo } from './pages/SerieInfo';
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/:serieId" element={<SerieInfo />}/>
    </Routes>
    </HashRouter>
  </React.StrictMode>,
)