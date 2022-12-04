import "./App.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function App() {
  return (
    <div className="App">
      <div className="swiper-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={false}
          mousewheel={true}
          cssMode={true}
          pagination
          modules={[Pagination, Navigation]}
          style={{ height: "300px", width: "300px", color: "#fff" }}
          bulletClass={"background-color:#fff;"}
        >
          <SwiperSlide>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lpibo-ew-1656015868.jpg"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "300px",
                borderRadius: "1rem",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "300px",
                borderRadius: "1rem",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2020/04/The-Muraka-Undersea-Bedroom-scaled.jpg"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "300px",
                borderRadius: "1rem",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
