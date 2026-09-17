"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./WhyChooseCarousel.css";
import { IWhyChooseCard } from "@/types/university-details";
import { CheckCircle2, Target, Globe, ArrowLeft, ArrowRight, Briefcase, Users, BookOpen } from "lucide-react";

interface WhyChooseCarouselProps {
  data: IWhyChooseCard[];
}

export default function WhyChooseCarousel({ data }: WhyChooseCarouselProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case "check":
        return <CheckCircle2 className="why-choose-icon text-white" />;
      case "target":
        return <Target className="why-choose-icon text-white" />;
      case "globe":
        return <Globe className="why-choose-icon text-white" />;
      case "briefcase":
        return <Briefcase className="why-choose-icon text-white" />;
      case "users":
        return <Users className="why-choose-icon text-white" />;
      case "book":
        return <BookOpen className="why-choose-icon text-white" />;
      default:
        return <CheckCircle2 className="why-choose-icon text-white" />;
    }
  };

  return (
    <div className="why-choose-carousel-container">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        loop={true}
        observer={true}
        observeParents={true}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper && !swiper.destroyed) {
              swiper.update();
            }
          }, 100);
        }}
        slideToClickedSlide={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 150,
          modifier: 1,
          scale: 0.85,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
        }}
        className="why-choose-swiper"
      >
        {[...data, ...data].map((item, index) => (
          <SwiperSlide key={index} className="why-choose-slide">
            <div className="why-choose-card">
              <div className="why-choose-header">
                <div className="why-choose-icon-wrapper">{renderIcon(item.icon)}</div>
                <h3 className="why-choose-title">{item.title}</h3>
              </div>
              <div className="why-choose-content">
                <p className="why-choose-primary">{item.description}</p>
                {item.secondaryText && (
                  <p className="why-choose-secondary">{item.secondaryText}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev-custom">
          <ArrowLeft size={18} />
        </div>
        <div className="swiper-button-next-custom">
          <ArrowRight size={18} />
        </div>
        <div className="swiper-pagination-custom"></div>
      </Swiper>
    </div>
  );
}
