import * as React from "react";

interface ImageCardProps {
  imgPath: string;
  imgAlt: string;
  children: React.ReactNode;
}

const ImageCard: React.FunctionComponent<ImageCardProps> = (props) => {
  const { imgPath, imgAlt, children } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg select-none">
      <img
        src={imgPath}
        alt={imgAlt}
        className="w-full h-64 object-cover object-center"
      />
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};

export default ImageCard;
