import React from "react";

const AddRecipe = ({ handleSubmit, handleChange, query }) => {
	return (
		<>
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search Food"
					autoComplete="off"
					onChange={handleChange}
					value={query}
				/>
				<input type="submit" value="Search" />
			</form>
		</>
	);
};

export default AddRecipe;
