import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Farming } from './Farming';
import { Feedbacks } from './Feedbacks';
import { Inventory } from './Inventory';
import { Layout } from './Layout';

export function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/farming" element={<Farming />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
