import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function Hero() {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      rewind={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay]}
    >
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroBook.jpeg" alt="book" fill />
      </SwiperSlide>
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroStationary.png" alt="station" fill />
      </SwiperSlide>
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroCloth.jpeg" alt="cloth" fill />
      </SwiperSlide>
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroPurse.jpeg" alt="purse" fill />
      </SwiperSlide>
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroShoe.png" alt="shoe" fill />
      </SwiperSlide>
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroTech.jpeg" alt="tech" fill />
      </SwiperSlide>
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroFurniture.jpeg" alt="furniture" fill />
      </SwiperSlide>
    </Swiper>
  );
}
