import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TextAnimation from "../common/text-animation";
import { useState } from "react";


const StatusTitle = () => {


  return (
    <section className="streamers__area section-pt-95 ">
     <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
                <div className="section__title text-center mb-60">
                    <TextAnimation title="Juegos de la fecha" />
                    <h3 className="title">Resultados de la fecha</h3>
                </div>
            </div>
        </div>
    </div>
  </section>
  );
};

export default StatusTitle;