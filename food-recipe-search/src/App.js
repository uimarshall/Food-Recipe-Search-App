import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import AddRecipe from "./components/AddRecipe";
import Recipes from "./components/Recipes";

function App() {
	const [query, setQuery] = useState("");
	const [recipes, setRecipes] = useState([]);
	const APP_ID = "759a9f86";
	const APP_KEY = "ba2d23594e77b0cbc8c8fc6c40d2f9c7";
	//  API Link
	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
	// Get data from API
	const getData = async () => {
		const result = await axios.get(url);
		const { hits } = result.data;
		setRecipes(hits);
		console.log(result);
	};
	// Sync form input to state
	const handleChange = e => {
		setQuery(e.target.value);
	};
	// Get data after submit
	const handleSubmit = e => {
		e.preventDefault();
		getData();
		setQuery("");
	};

	return (
		<div className="App">
			<h1>Recipe Bowl</h1>
			<AddRecipe
				getData={getData}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				query={query}
			/>
			<div className="recipes">
				{recipes
					? recipes.map(recipe => <Recipes recipe={recipe} key={uuidv4()} />)
					: null}
			</div>
		</div>
	);
}

export default App;
