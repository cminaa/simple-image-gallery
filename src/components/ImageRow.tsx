import * as React from "react";

interface ImageRowProps {
  imgPath: string;
  imgAlt: string;
  children: React.ReactNode;
}

const ImageRow: React.FunctionComponent<ImageRowProps> = (props) => {
  const { imgPath, imgAlt, children } = props;
  return (
    <div className="flex w-full items-center py-4 select-none">
      <img
        src={imgPath}
        alt={imgAlt}
        className="w-16 h-16 object-cover object-center rounded-full mr-4 shadow-lg"
      />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default ImageRow;
