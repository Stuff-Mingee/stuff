import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../app/store";
import { Filters } from "../components/common/Filters";
import { StoryCard } from "../components/stories/StoryCard";
import { filterBySection, sortByDateTime } from "../features/storiesSlice";

import { generateValidUrl } from "../utils/utils";

export function Stories() {
  const { filteredStories } = useSelector((state: RootState) => ({
    ...state.stories,
  }));

  return (
    <>
      <Filters />

      <div className="container">
        <main className="stories-grid">
          {filteredStories &&
            filteredStories.map((item, i) => (
              <Link
                key={i}
                to={generateValidUrl(item.story.headline, item.storyId)}>
                <StoryCard story={item} />
              </Link>
            ))}
        </main>
      </div>
    </>
  );
}
