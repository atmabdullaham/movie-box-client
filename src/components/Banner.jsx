import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-lg h-[200px] md:h-[500px]">
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co.com/8D5x9p7T/1.jpg

"
          className="w-full "
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co.com/P0Gz94F/2.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co.com/b58dSFmQ/3.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
  
    </div>
  );
};

export default Banner;
