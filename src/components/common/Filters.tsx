import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { filterBySection, sortByDateTime } from "../../features/storiesSlice";

export function Filters() {
  const dispatch = useDispatch();

  const { selectedSection, sortBy, sections } = useSelector(
    (state: RootState) => ({
      ...state.stories,
    })
  );

  const handleFilter = () => (event: any) => {
    dispatch(filterBySection(event.target.value));
  };

  const handleSortDateTime = () => () => {
    dispatch(sortByDateTime());
  };

  return (
    <>
      <section className="container filter-block">
        <select id="section" onChange={handleFilter()} value={selectedSection}>
          <option value="All">All</option>
          {sections?.map((section: string) => (
            <option value={section} key={section}>
              {section}
            </option>
          ))}
        </select>
        <button onClick={handleSortDateTime()}>
          {sortBy === "Asc" ? "Sort by Oldest" : "Sort by Newest"}
        </button>
      </section>
    </>
  );
}
