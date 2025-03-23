import './details.css';

export default function RecipeDetails() {
    const recipe = {
        name: "Spaghetti Carbonara",
        category: "Pasta",
        time: "30 minutes",
        ingredients: [
            "200g spaghetti",
            "100g pancetta",
            "2 eggs",
            "50g grated parmesan",
            "2 cloves garlic",
            "Salt & black pepper",
            "Olive oil"
        ],
        preparation: "Cook spaghetti. Fry pancetta with garlic. Mix eggs and parmesan. Combine everything with pasta. Serve hot!",
        imageUrl: "/images/pasta.jpg"
    };

    return (
        <section className="recipe-details">
            <div className="details-container">
                {/* Left Side: Recipe Info */}
                <div className="left-side">
                    <h1>{recipe.name}</h1>
                    <p className="category"><strong>Category:</strong> {recipe.category}</p>
                    <p className="time"><strong>Preparation Time:</strong> {recipe.time}</p>

                    <h3>Preparation</h3>
                    <p className="preparation">{recipe.preparation}</p>

                    <a href="/" className="back-button">Back to Home</a>
                </div>

                {/* Right Side: Image + Ingredients */}
                <div className="right-side">
    <img className="recipe-image" src={recipe.imageUrl} alt={recipe.name} />
    <h3>Ingredients</h3>
    <ul className="ingredients-container">
        {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ))}
    </ul>
</div>
            </div>
        </section>
    );
}
