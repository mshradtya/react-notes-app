import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
	const [text, setText] = useState("");
	const charLimit = 200;

	const handleChange = (event) => {
		if (charLimit - text.length > 0) {
			setText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (text.trim().length > 0) {
			handleAddNote(text);
			setText("");
		}
	};

	return (
		<div className="note add">
			<textarea
				cols="10"
				rows="8"
				onChange={handleChange}
				value={text}
				placeholder="Type here to add note..."
			></textarea>
			<div className="note-footer">
				<small>{charLimit - text.length} Remaining</small>
				<button onClick={handleSaveClick}>Save</button>
			</div>
		</div>
	);
};

export default AddNote;
