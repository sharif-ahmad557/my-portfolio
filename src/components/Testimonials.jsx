"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jhon Doe",
      role: "Product Designer",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      review:
        "A really good job, all aspects of the project were followed step by step and with good results.",
      stars: 5,
    },
    {
      id: 2,
      name: "Paula Vusy",
      role: "App Developer",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      review:
        "Sharif is extremely talented. He delivered the project early and the code quality was top-notch.",
      stars: 5,
    },
    {
      id: 3,
      name: "Sara Cill",
      role: "Marketing Manager",
      image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
      review:
        "Excellent communication and problem-solving skills. Would definitely hire him again for future projects.",
      stars: 4,
    },
    {
      id: 4,
      name: "Mark Smith",
      role: "CEO at Tech",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026094d",
      review:
        "The website looks exactly how I imagined. Great eye for design and attention to detail.",
      stars: 5,
    },
    {
      id: 5,
      name: "Emily Clark",
      role: "Startup Founder",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026012d",
      review:
        "Professional, creative, and very responsive. He transformed our vague ideas into a solid product.",
      stars: 5,
    },
  ];

  return (
    <section className="section py-20 px-4 transition-colors relative overflow-hidden">
      {/* ============ BACKGROUND DECORATION ============ */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:20px_20px] opacity-40 dark:opacity-30"></div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-title/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container relative z-10">
        {/* ============ SECTION TITLE ============ */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            My Clients Say
          </motion.h2>
          <span className="text-sm text-text block mt-2">Testimonials</span>
        </div>

        {/* ============ SWIPER SLIDER ============ */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="mySwiper pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="pb-10">
              <div className="bg-container/80 backdrop-blur-sm dark:bg-darkContainer/80 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 relative group h-full select-none">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 text-gray-200 dark:text-gray-700 w-10 h-10 group-hover:text-title/10 transition-colors" />

                {/* Client Image */}
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-title mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-bold text-title">{item.name}</h3>
                <span className="text-xs text-text mb-4 block">
                  {item.role}
                </span>

                {/* Review Text */}
                <p className="text-sm text-text leading-relaxed mb-4 min-h-[60px]">
                  "{item.review}"
                </p>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < item.stars
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-pagination-bullet {
            background-color: var(--text) !important;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background-color: var(--title) !important;
            opacity: 1;
            width: 20px;
            border-radius: 5px;
            transition: width 0.3s;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;
