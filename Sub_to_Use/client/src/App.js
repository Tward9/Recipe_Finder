import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

//pages
import Title from './pages/Title';
import Home from './pages/Home';
import IngredientEntry from './pages/Ingredients';
import RecipeList from './pages/RecipeList';
import SuppliesList from './pages/Supplies';
import Login from './pages/Login';

//components

function App() {
  let supplies = new Array(5);
  const [ingredientFormData, setIngredientFormData] = useState({
    ingredientOne: '',
    ingredientTwo: '',
    ingredientThree: '',
  });
  const [checkedSupplies, setCheckedSupplies] = useState(
    new Array(supplies.length).fill(false)
  );

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Title />} />
          <Route path='/home' element={<Home />} />
          <Route path='/ingredients' element={<IngredientEntry ingredientFormData={ingredientFormData} setIngredientFormData={setIngredientFormData} checkedSupplies={checkedSupplies} />} />
          <Route path='/recipeList' element={<RecipeList />} />
          <Route path='/supplies' element={<SuppliesList checkedSupplies={checkedSupplies} setCheckedSupplies={setCheckedSupplies} ingredientFormData={ingredientFormData} />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
