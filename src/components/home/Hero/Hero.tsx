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
      <SwiperSlide style={{ height: "400px" }}>
        <Image src="/hero/book.webp" alt="book" fill />
      </SwiperSlide>
      <SwiperSlide style={{ height: "400px" }}>
        <Image src="/hero/cloth.webp" alt="cloth" fill />
      </SwiperSlide>
      <SwiperSlide style={{ height: "400px" }}>
        <Image src="/hero/purse.jpg" alt="purse" fill />
      </SwiperSlide>
      <SwiperSlide style={{ height: "400px" }}>
        <Image src="/hero/shoe.jpg" alt="shoe" fill />
      </SwiperSlide>
      <SwiperSlide style={{ height: "400px" }}>
        <Image src="/hero/tech.jpg" alt="tech" fill />
      </SwiperSlide>
      <SwiperSlide style={{ height: "400px" }}>
        <Image src="/hero/a.webp" alt="a" fill />
      </SwiperSlide>
      <SwiperSlide style={{ height: "400px" }}>
        <Image src="/hero/b.webp" alt="b" fill />
      </SwiperSlide>
    </Swiper>
  );
}
