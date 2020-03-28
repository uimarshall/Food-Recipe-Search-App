import React from "react";

const FlashMessage = ({ message }) => {
	return (
		<div className="flash-message">
			<h3>{message}</h3>
		</div>
	);
};

export default FlashMessage;
