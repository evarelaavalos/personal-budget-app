import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout';

import Add from './pages/Add';
import Expenses from './pages/Expenses';
import Home from './pages/Home';
import Incomes from './pages/Incomes';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/incomes" element={<Incomes />} />
      </Routes>
    </Layout>
  )
}
