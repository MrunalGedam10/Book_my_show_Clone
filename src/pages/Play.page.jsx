import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import Poster from "../components/Poster/PosterComponent";
import PlayFilters from "../components/PlayFilters/PlayFiltersComponent";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10 flex lg:flex-row-reverse">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold">Plays is Hopet</h2>
          <div className="flex flex-wrap">
             <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-suhani-shah-kahaani-india-tour-0-2022-8-29-t-12-36-14.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-daddy-kool-by-atul-khatri-0-2022-8-16-t-10-37-17.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sunburn-arena-ft-dj-snake-delhi-ncr-0-2022-8-19-t-11-31-17.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1655227876%2Fbryhbujb4jgjoiuhjjod.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://media.insider.in/image/upload/c_crop,g_custom/v1627159653/mjebbl4ayurol6nhzoqb.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
              
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilters
              title="Language"
              tags={["English", "Hindi", "Kannada"]}
            />
          </div>
          <div>
            <PlayFilters
              title="Genres"
              tags={[
                "Drama",
                "Comedy",
                "Romantic",
                "Fantasy",
                "Musical",
                "Thriller",
              ]}
            />
          </div>
          <div>
            <PlayFilters
              title="More Filters"
              tags={["Fast Filling", "OutDoor Events", "Kids Allowed"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
