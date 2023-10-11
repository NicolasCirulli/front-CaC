import "./carousel.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

const Carousel = () => {
  const [indice, setIndice] = useState(0);
  const [dataEvents, setDataEvents] = useState([]);

  useEffect(() => {
    axios("https://mindhub-xj03.onrender.com/api/amazing")
      .then((data) => setDataEvents(data.data.events.slice(0, 4)))
      .catch((err) => console.log(err));

    return () => console.log("Se desmonto el componente");
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      next();
    }, 2000);
    return () => clearInterval(intervalID);
  }, [indice]);

  const previous = () => {
    if (indice == 0) {
      setIndice(dataEvents.length - 1);
    } else {
      setIndice(indice - 1);
    }
  };

  const next = () => {
    if (indice == dataEvents.length - 1) {
      setIndice(0);
    } else {
      setIndice(indice + 1);
    }
  };

  return (
    <div className="carousel">
      <AiOutlineArrowLeft className="carousel__arrow" onClick={previous} />

      {dataEvents.length > 0 && (
        <img
          className="carousel__img object-cover"
          src={dataEvents[indice].image}
          alt="imagen carousel"
        />
      )}

      <AiOutlineArrowRight className="carousel__arrow" onClick={next} />
    </div>
  );
};

export default Carousel;
