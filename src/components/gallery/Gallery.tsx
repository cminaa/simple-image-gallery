import * as React from "react";
import { GalleryItem } from "../../mock-data";
import GridGallery from "./GridGallery";
import ListGallery from "./ListGallery";

interface GalleryProps {
  isGridLayout: boolean;
  data: GalleryItem[];
}

const Gallery: React.FunctionComponent<GalleryProps> = (props) => {
  return props.isGridLayout ? (
    <GridGallery data={props.data} />
  ) : (
    <ListGallery data={props.data} />
  );
};

export default Gallery;
