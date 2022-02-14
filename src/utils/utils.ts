import { IImage } from "./../models/models";
const LIMIT_CHAR = 80;

export const limitcharacters = (val: string) => {
  return val.length > LIMIT_CHAR ? val.substring(0, LIMIT_CHAR) + "..." : val;
};

export const generateValidUrl = (val: string, id: string) => {
  return `/${id}/${val.replace(/[^A-Z0-9]+/gi, "_")}`;
};

export const generateImageTag = (images: IImage[]) => {
  const regEx = /([^x]+)/;
  let srcSetValue = "";
  const uniqueImages = [...new Set(images.map((obj) => obj))];

  uniqueImages.forEach(function (item) {
    let size = item.size.match(regEx);

    srcSetValue += `${item.src} ${size && size[0]}w, `;
  });

  return srcSetValue;
};
