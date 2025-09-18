import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/slices/countriesSlice";

import CountryList from "../components/CountryList";
import Slider from "../components/Slider";
import type { AppDispatch, RootState } from "../redux/store";
import Loader from "../components/Loader";
import Header from "../components/Header";
import loginIllustration from "../assets/login-screen-image.png";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.countries);
  useEffect(() => {
    dispatch(fetchCountries(""));
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <div className="p-1">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="welcome-box container">
            <div className="hr-line-left" />
            <h1 className="welcome-text">WELCOME</h1>
            <div className="hr-line-right" />
          </div>
          <div className="slider-container container">
            <div className="slider-sum">
              <Slider />
            </div>

            <div className="right-div">
              <img src={loginIllustration} alt={`Slide`} />
            </div>
          </div>
          <CountryList />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
