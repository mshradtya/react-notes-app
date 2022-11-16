import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ handleSearch }) => {
	return (
		<div className="search">
			<AiOutlineSearch size="1.3em" />
			<input
				onChange={(event) => handleSearch(event.target.value)}
				type="text"
				placeholder="type here to search..."
			/>
		</div>
	);
};

export default Search;
