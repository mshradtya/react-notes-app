import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
	const [notes, setNotes] = useState([]);

	const [searchText, setSearchText] = useState("");

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const notesData = JSON.parse(
			localStorage.getItem("react-notes-app-data")
		);
		if (notesData) setNotes(notesData);
	}, []);

	useEffect(() => {
		localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const searchNote = (text) => {
		setSearchText(text);
	};

	return (
		<div className={`container ${darkMode ? "dark-mode" : ""}`}>
			<div className="app-container">
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearch={searchNote} />
				<NoteList
					notes={notes.filter((note) =>
						note.text.includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
