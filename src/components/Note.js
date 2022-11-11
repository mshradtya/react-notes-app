import { AiFillDelete } from "react-icons/ai";

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className="note">
			<span>{text}</span>
			<div className="note-footer">
				<small>{date}</small>
				<AiFillDelete
					className="note-delete-icon"
					onClick={() => handleDeleteNote(id)}
					size="1.3em"
				/>
			</div>
		</div>
	);
};

export default Note;
