import React, { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";
import MovieInfo from "./MovieInfoComponent";


const MovieHero = () => {
  const { movie } = useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <div>
        {/* Small screen size */}
        <div className="lg:hidden w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Cover Poster"
            className="m-4 rounded"
            style={{ width: "calc(100% - 2rem" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-blsck flex-col gap-2 md:px-4 ">
              <h4>4.4k rating</h4>
              <h4>English, Hindi, Kannada</h4>
              <h4>
                {movie.runtime} min | {genres}
              </h4>
            </div>
          </div>

          <div className="felx items-center gap-3 md:px-4 md:w-screen text-xl py-4">
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Rent $149
            </button>
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Buy $999
            </button>
          </div>
        </div>

        {/* Large screen size */}
        <div
          className="relative hidden w-full lg:flex"
          style={{ height: "28rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.95%, rgb(34, 34, 34) 38.2%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}>
                <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                    <div className="w-64 h-96">
                        <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" className="w-full h-full rounded-lg" />
                    </div>
                    <div>
                        <MovieInfo movie={movie}/>
                    </div>
                </div>

                <img src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Backdrop Poster" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieHero;
