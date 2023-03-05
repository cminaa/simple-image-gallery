import * as React from "react";
import { GalleryItem } from "../../mock-data";
import ImageCard from "../ImageCard";

interface GridGalleryProps {
  data: GalleryItem[];
}

const GridGallery: React.FunctionComponent<GridGalleryProps> = (props) => {
  const renderCard = (item: GalleryItem) => (
    <ImageCard key={item.name} imgPath={item.imgPath} imgAlt={item.name}>
      <h2 className="text-lg font-bold mb-2">{item.name}</h2>
      <p className="text-gray-700 text-base mb-2">Size: {item.size} MB</p>
      <p className="text-gray-700 text-base mb-2">
        Publisher: {item.publisher}
      </p>
    </ImageCard>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {props.data.map((item) => renderCard(item))}
    </div>
  );
};

export default GridGallery;
