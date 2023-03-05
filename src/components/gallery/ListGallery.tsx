import * as React from "react";
import { GalleryItem } from "../../mock-data";
import ImageRow from "../ImageRow";

interface ListGalleryProps {
  data: GalleryItem[];
}

const ListGallery: React.FunctionComponent<ListGalleryProps> = (props) => {
  const renderRow = (item: GalleryItem) => (
    <ImageRow key={item.name} imgPath={item.imgPath} imgAlt={item.name}>
      <h2 className="text-lg font-bold">{item.name}</h2>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-700 text-base mr-4">Size: {item.size} MB</p>
        <p className="text-gray-700 text-base">Publisher: {item.publisher}</p>
      </div>
    </ImageRow>
  );

  return (
    <div className="flex flex-col flex-grow justify-center items-center divide-y divide-gray-300 w-full m-auto px-20">
      {props.data.map((item) => renderRow(item))}
    </div>
  );
};

export default ListGallery;
