export interface IStory {
  storyId: string;
  viewCount: number;
  publishedDate: string;
  story: ITheStory;
}

export interface ITheStory {
  headline: string;
  url: string;
  intro: string;
  section: string;
  images: IImage[];
}

export interface IImage {
  type: string;
  size: string;
  src: string;
  caption: string;
}
