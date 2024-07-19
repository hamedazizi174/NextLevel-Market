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
        <Image src="/hero/heroBook.jpeg" alt="book" layout="fill" />
      </SwiperSlide>
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroStationary.png" alt="station" layout="fill" />
      </SwiperSlide>
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroCloth.jpeg" alt="cloth" layout="fill" />
      </SwiperSlide>
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroPurse.jpeg" alt="purse" layout="fill" />
      </SwiperSlide>
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroShoe.png" alt="shoe" layout="fill" />
      </SwiperSlide>
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroTech.jpeg" alt="tech" layout="fill" />
      </SwiperSlide>
      <SwiperSlide style={{ height: "500px" }}>
        <Image src="/hero/heroFurniture.jpeg" alt="furniture" layout="fill" />
      </SwiperSlide>
    </Swiper>
  );
}
