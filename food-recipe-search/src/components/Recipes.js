import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipes = ({ recipe }) => {
	const [ingredientshow, setIngredientshow] = useState(false);
	const handleClick = () => {
		setIngredientshow(!ingredientshow);
	};

	const { label, image, url, ingredients } = recipe.recipe;
	return (
		<div className="recipe">
			<h2>{label}</h2>
			<img src={image} alt={label} />
			<a href={url} target="_blank" rel="noopener noreferrer">
				More Info <i class="fa fa-angle-right"></i>
				<i class="fa fa-angle-right"></i>
			</a>
			<button onClick={handleClick}> see ingredients</button>
			{ingredientshow ? <RecipeDetails ingredients={ingredients} /> : null}
		</div>
	);
};

export default Recipes;
