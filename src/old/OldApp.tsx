import React, { useState } from "react";
import { FaList, FaTh } from "react-icons/fa";
import { dummyData, GalleryItem } from "../mock-data";

function OldApp() {
  const [isGrid, setIsGrid] = useState(true);
  const [sortKey, setSortKey] = useState("name");

  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  const handleSortChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSortKey(event.target.value);
  };

  function sortByName(a: GalleryItem, b: GalleryItem): number {
    return a.name.localeCompare(b.name);
  }

  function sortBySize(a: GalleryItem, b: GalleryItem): number {
    return a.size - b.size;
  }

  function sortByPublisher(a: GalleryItem, b: GalleryItem): number {
    return a.publisher.localeCompare(b.publisher);
  }
  const sortedData = dummyData
    // .slice()
    .sort((a: GalleryItem, b: GalleryItem) => {
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

  return (
    <div className="flex flex-col m-0 p-6">
      <div className="flex justify-between px-20">
        <div>
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleView}
              className={`   font-bold py-2 px-4 rounded-l-lg ${
                isGrid
                  ? "bg-gray-500 text-black"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FaTh />
            </button>
            <button
              onClick={toggleView}
              className={` font-bold py-2 px-4 rounded-r-lg ${
                !isGrid
                  ? "bg-gray-500 text-black"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FaList />
            </button>
          </div>
        </div>
        <div>
          <label className="mr-2 font-bold text-sm">Sort by:</label>
          <select
            value={sortKey}
            onChange={handleSortChange}
            className="text-sm rounded border-none outline-none appearance-none bg-gray-200 px-4 py-2 cursor-pointer hover:bg-gray-30 focus:bg-gray-300 focus:shadow-outline-blue"
          >
            <option value="name">Name</option>
            <option value="size">Size</option>
            <option value="publisher">Publisher</option>
          </select>
        </div>
      </div>

      {isGrid && (
        <div className="flex flex-wrap justify-center gap-4">
          {sortedData.map((item) => (
            <div
              key={item.name}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img
                src={item.imgPath}
                alt={item.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="px-6 py-4">
                <h2 className="text-lg font-bold mb-2">{item.name}</h2>
                <p className="text-gray-700 text-base mb-2">
                  Size: {item.size} MB
                </p>
                <p className="text-gray-700 text-base mb-2">
                  Publisher: {item.publisher}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {!isGrid && (
        <div className="flex flex-col flex-grow justify-center items-center divide-y divide-gray-300 w-full m-auto px-20">
          {sortedData.map((item) => (
            <div key={item.name} className="flex w-full items-center py-4">
              <img
                src={item.imgPath}
                alt={item.name}
                className="w-16 h-16 object-cover object-center rounded-full mr-4 shadow-lg"
              />
              <div className="flex-grow">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-700 text-base mr-4">
                    Size: {item.size} MB
                  </p>
                  <p className="text-gray-700 text-base">
                    Publisher: {item.publisher}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OldApp;
