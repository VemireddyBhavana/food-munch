import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import MenuPage from './components/MenuPage';
import MealDetail from './components/MealDetail';
import FavoritesPage from './components/FavoritesPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:category" element={<MenuPage />} />
        <Route path="/menu/:category/:id" element={<MealDetail />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
