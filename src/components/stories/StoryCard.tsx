import { generateImageTag, limitcharacters } from "../../utils/utils";

export function StoryCard({ story }: any) {
  return (
    <>
      {
        <article className="story-card">
          <img
            src={story.story.images[0].src}
            srcSet={generateImageTag(story.story.images)}
            alt={story.story.images[0].caption}
            sizes="(min-width: 841px) 748px, 100vw"
          />
          <div className="text">
            <h3>{story.story.headline}</h3>
            <p>{limitcharacters(story.story.intro)}</p>
            <small>{story.publishedDate}</small>
          </div>
        </article>
      }
    </>
  );
}
