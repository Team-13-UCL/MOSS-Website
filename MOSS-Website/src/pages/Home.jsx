import React from 'react';
import HomeActivityComponent from '../components/HomeActivityComponent';
import BannerCarousel from "../components/BannerCarousel";
import { museums } from "../data/museumImages";

const Home = () => {

  const museumImages = museums.flatMap(museum => museum.images);

  return (
    <>
      <div className="w-full h-[50vh] p-2">
        <BannerCarousel images={museumImages} />
      </div>
      <HomeActivityComponent />
    </>
  );
};

export default Home;
