const SearchBar = (props) => {
  return (
    <div className="search_bar">
      <input
        placeholder="type something here"
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
};
export default SearchBar;
