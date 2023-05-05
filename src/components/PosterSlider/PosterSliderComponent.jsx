import React from "react";
import Poster from "../Poster/PosterComponent";
import Slider from "react-slick";

const PosterSlider = (props) => {
  const { posters, title, subtitle, isDark, config } = props;
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col items-start sm:mx-3 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {subtitle}
        </p>
      </div>

      {config && (
        <Slider {...config}>
          {posters.map((each) => (
            <Poster {...each} isDark={isDark} />
          ))}
        </Slider>
      )}

      {!config && (
        <Slider {...settings}>
          {posters.map((each) => (
            <Poster {...each} isDark={isDark} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default PosterSlider;
