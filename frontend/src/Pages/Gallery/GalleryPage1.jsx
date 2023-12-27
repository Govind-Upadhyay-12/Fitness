import React from "react";
import { galleryImg } from "./GalleryFiles";
import { Link } from "react-router-dom";

function GalleryPage1() {
  const firstPageImgs = galleryImg.filter((item) => item.id <= 8);
  return (
    <>
      <div className="grid grid-cols-3 gap-7 md1000:grid-cols-2 min540:grid-cols-1">
        {firstPageImgs.map((image) => (
          <div key={image.id}>
            <img alt="gallery_img" className="w-full h-auto" src={image.img} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-32">
        <Link
          onClick={() => window.top(0, 0)}
          to="/gallery/page-1"
          className="text-white inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-[#ff0336] "
        >
          1
        </Link>
        <Link
          onClick={() => window.top(0, 0)}
          to="/gallery/page-2"
          className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-white "
        >
          2
        </Link>
        <Link
          onClick={() => window.top(0, 0)}
          to="/gallery/page-2"
          className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-white "
        >
          <i className="fa-solid fa-angles-right"></i>
        </Link>
      </div>
    </>
  );
}

export default GalleryPage1;
