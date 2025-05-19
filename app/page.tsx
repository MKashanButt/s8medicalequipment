import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function Home() {
  return (
    <main>
      <section>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        {/* <Image src="/hero.jpg" alt="Hero Image" width={1920} height={1080} />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Welcome to S8 Medical Equipment
          </h1>
        </div> */}
      </section>
    </main>
  );
}
