import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

//pages
import Title from './pages/Title';
import Home from './pages/Home';
import IngredientEntry from './pages/Ingredients';
import RecipeList from './pages/RecipeList';
import SuppliesList from './pages/Supplies';

//components
import Header from './components/Header';

function App() {
  const [ingredientFormData, setIngredientFormData] = useState({
    ingredientOne: '',
    ingredientTwo: '',
    ingredientThree: '',
  });
  const [suppliesFormData, setSuppliesFormData] = useState({
        
  });
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Title />} />
          <Route path='/home' element={<Home />} />
          <Route path='/ingredients' element={<IngredientEntry ingredientFormData={ingredientFormData} setIngredientFormData={setIngredientFormData} />} />
          <Route path='/recipeList' element={<RecipeList />} />
          <Route path='/supplies' element={<SuppliesList suppliesFormData={suppliesFormData} setSuppliesFormData={setSuppliesFormData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
