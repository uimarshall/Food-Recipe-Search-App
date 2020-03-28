import React from "react";
import FlashMessage from "./FlashMessage";

const AddRecipe = ({ handleSubmit, handleChange, query, message }) => {
	return (
		<>
			<form className="search-form" onSubmit={handleSubmit}>
				{message ? <FlashMessage message={message} /> : null}

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
