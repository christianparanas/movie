import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
import { CarouselCard } from "components";

export default function Carousel({ trending }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="w-full lg:min-h-screen mx-auto pt-16 md:pt-0">
      <Slider {...settings}>
        {trending &&
          trending.results
            .slice(0, 4)
            .map((data, key) => <CarouselCard key={key} data={data} />)}
      </Slider>
    </div>
  );
}
