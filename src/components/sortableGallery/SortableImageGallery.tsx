import * as React from "react";
import { useEffect, useState } from "react";
import { dummyData, GalleryItem } from "../../mock-data";
import { FaList, FaTh } from "react-icons/fa";
import Sort, { SortOption } from "../SortComponent";
import Toggle from "../ToggleComponent";
import Gallery from "../gallery/Gallery";

const SortableImageGallery: React.FunctionComponent = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [sortKey, setSortKey] = useState("name");
  const sortedData = dummyData.sort((a: GalleryItem, b: GalleryItem) => {
    switch (sortKey) {
      case "name":
        return sortByName(a, b);
      case "size":
        return sortBySize(a, b);
      case "publisher":
        return sortByPublisher(a, b);
      default:
        return sortByName(a, b);
    }
  });
  const [galleryData, setGalleryData] = useState<GalleryItem[]>(sortedData);

  useEffect(() => {
    setGalleryData(sortedData);
  }, [sortedData]);

  const sortOptions: SortOption[] = [
    { value: "name", label: "Name" },
    { value: "size", label: "Size" },
    { value: "publisher", label: "Publisher" },
  ];

  function sortByName(a: GalleryItem, b: GalleryItem): number {
    return a.name.localeCompare(b.name);
  }

  function sortBySize(a: GalleryItem, b: GalleryItem): number {
    return a.size - b.size;
  }

  function sortByPublisher(a: GalleryItem, b: GalleryItem): number {
    return a.publisher.localeCompare(b.publisher);
  }

  return (
    <div className="flex flex-col m-0 p-6">
      <div className="flex justify-between px-20">
        <Toggle
          firstOption={<FaTh />}
          secondOption={<FaList />}
          onToggleOptionChange={setIsGrid}
          isFirstActive={isGrid}
        />
        <Sort onSortValueChange={setSortKey} options={sortOptions} />
      </div>
      <Gallery isGridLayout={isGrid} data={galleryData} />
    </div>
  );
};

export default SortableImageGallery;
