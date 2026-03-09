/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import Dashboard from './pages/Dashboard';
import Podcasts from './pages/Podcasts';
import Community from './pages/Community';
import InnovationHub from './pages/InnovationHub';
import Globe from './pages/Globe';
import Architecture from './pages/Architecture';
import Private from './pages/Private';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="podcasts" element={<Podcasts />} />
          <Route path="community" element={<Community />} />
          <Route path="innovation" element={<InnovationHub />} />
          <Route path="globe" element={<Globe />} />
          <Route path="architecture" element={<Architecture />} />
          <Route path="private" element={<Private />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
