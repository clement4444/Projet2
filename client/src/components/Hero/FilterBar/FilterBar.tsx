import "./FilterBar.css";

const FilterBar = () => {
  return (
    <div>
      <h2>
        Réserver une <span className="h2Color">chambre</span>
      </h2>
      <div className="filtreBar">
        <input
          type="text"
          placeholder="Votre chambre"
          className="searchBar"
        ></input>
        <input type="date" className="arrival"></input>
        <input type="date" className="departure"></input>
        <button className="filtre">Filtrer</button>
      </div>
      <div className="ligne"></div>
    </div>
  );
};

export default FilterBar;
