import { useState, useEffect } from "react";
import "./meal.css";

export default function MealPage() {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMeals("chicken");
  }, []);

  const fetchMeals = async (query) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMeals(searchTerm);
  };

  return (
    <div className="meal-gallery">
      <h1 className="h-meal">Meal Gallery</h1>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a meal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button><i className="fa-solid fa-magnifying-glass" type="submit"></i></button>

      </form>

      <div className="gallery">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="meal-item">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
            </div>
          ))
        ) : (
          <p className="no-results">No meals found. Try another search!</p>
        )}
      </div>
    </div>
  );
};


