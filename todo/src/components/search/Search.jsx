import "../search/Search.css";

export default function Search({ search, setSearch }) {
  return (
    <form action="" className="Search">
      <div className="input-wrapper">
        <span className="icon">🔍</span>
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>
    </form>
  );
}
