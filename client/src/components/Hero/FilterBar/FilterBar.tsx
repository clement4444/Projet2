import "./FilterBar.css";
import Arrival from "./Arrival/Arrival";
import Departure from "./Departure/Departure";
import Filter from "./Filter/Filter";
import Search from "./Search/Search";

const FilterBar = () => {
  return (
    <div>
      <h2>
        Réserver une <span className="h2Color">chambre</span>
      </h2>

      <div className="filtreBar">
        <Search />
        <Arrival />
        <Departure />
        <Filter />
      </div>
    </div>
  );
};

export default FilterBar;
