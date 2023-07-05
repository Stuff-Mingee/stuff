import { Helmet } from "react-helmet";
import { IStory } from "../models/models";
export function MetaDecorator({ story }: MetaDecoratorProps) {
    return (
        <>
            <Helmet>
                {/* <title>{story.story.intro}</title> */}
                <meta name="twitter:card" content={story.story.intro} />
                <meta name="twitter:url" content={window.location.href} />
                <meta name="twitter:title" content={story.story.headline} />
                <meta name="twitter:description" content={story.story.intro} />
                <meta name="twitter:creator" content="@StuffNZ" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={story.story.intro} />
                <meta property="og:description" content={story.story.intro} />
                <meta property="og:site_name" content={"Masthead"} />
                {/* <meta property="og:image" content="https://resources.stuff.co.nz/content/dam/images/4/z/5/s/l/q/image.related.StuffLandscapeSixteenByNine.1420x800.26vnnn.png/1688570334850.jpg" /> */}
                <meta property="og:image:alt" content={story.story.images[0].caption} />
                <meta name="description" content={story.story.intro} />
                <meta name="source" content={story.story.intro} />
            </Helmet>
        </>
    );
}

interface MetaDecoratorProps {
    story: IStory;
}
