import React, { useEffect, useState } from "react";
import EntertainmentCard from "../components/Entertainment/EntertainmentCardComponent";
import HeroCarousel from "../components/HeroCarousel/HeroCarouselComponent";
import PosterSlider from "../components/PosterSlider/PosterSliderComponent";
import DefaultLayoutHoc from "../layout/Default.layout";
import axios from "axios";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvent, setOnlineStreamEvent] = useState([]);


  useEffect(() => {
    const requestPopulareMovies = async () => {
      const getPopulareMovies = await axios.get("/movie/popular");
      setPremierMovies(getPopulareMovies.data.results);
    };
    requestPopulareMovies();
  }, []);
  
  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setRecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setOnlineStreamEvent(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-grey-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment.
        </h1>
        <EntertainmentCard />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="n-full w-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Sream Events"
          posters={onlineStreamEvent}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
