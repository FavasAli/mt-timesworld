import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const Slider = () => {
  const contries = useSelector((state: RootState) => state.countries.countries);

  return (
    <Carousel className=" p-0">
      {contries.length > 0
        ? contries.map((country, index) => (
            <Carousel.Item key={index}>
              <img src={country.flag} alt={`Slide ${index}`} />
            </Carousel.Item>
          ))
        : null}
    </Carousel>
  );
};

export default Slider;
