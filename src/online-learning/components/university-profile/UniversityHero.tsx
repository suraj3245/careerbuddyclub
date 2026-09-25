"use client";

import React from "react";
import { UniversityProfile } from "@/online-learning/data/api";
import { universitiesData } from "@/online-learning/components/universities/universityData";

interface UniversityHeroProps {
  university: UniversityProfile;
  onEnquiryOpen: () => void;
}

export function UniversityHero({ university, onEnquiryOpen }: UniversityHeroProps) {
  const handleScrollToPrograms = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("programs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const initial = university.name ? university.name.charAt(0).toUpperCase() : "";

  const uData = universitiesData.find(
    (u) => 
      u.name.toLowerCase() === university.name.toLowerCase() || 
      u.id === university.slug ||
      university.slug.includes(u.id) ||
      u.id.includes(university.slug)
  );
  const logoSrc = uData?.logo;

  const isAmity = (university?.slug || "").includes("amity") || (university?.name || "").toLowerCase().includes("amity");
  const isChandigarh = (university?.slug || "").includes("chandigarh") || (university?.name || "").toLowerCase().includes("chandigarh");
  const isGalgotias = (university?.slug || "").includes("galgotias") || (university?.name || "").toLowerCase().includes("galgotias");
  
  let bannerImage = "";
  if (isAmity) {
    bannerImage = "/assets/images/acre/amity.png";
  } else if (isChandigarh) {
    bannerImage = "/assets/images/acre/Chandigarh.png";
  } else if (isGalgotias) {
    bannerImage = "/assets/images/acre/galgotias.png";
  }

  return (
    <div className="upHeroWrapper">
      {/* Banner Section */}
      <div 
        className="upHeroBanner"
        style={bannerImage ? { backgroundImage: `url(${bannerImage})` } : undefined}
      >
        <div className="d-none d-md-block upHeroBannerDots">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>

      {/* Content Section */}
      <div className="upHeroContent">
        {/* Logo */}
        <div className="upHeroLogo" style={{ overflow: "hidden" }}>
          {logoSrc ? (
            <img 
              src={logoSrc} 
              alt={`${university.name} logo`} 
              style={{ width: "100%", height: "100%", objectFit: "contain" }} 
            />
          ) : (
            initial
          )}
        </div>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
          {/* Left info */}
          <div className="mb-4 mb-lg-0">
            <h1 className="upHeroTitleText">
              {university.name}
            </h1>
            
            {/* Badges / Ratings */}
            <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
              <span className="upHeroBadge">UGC</span>
              <span className="upHeroBadge">NIRF</span>
              <span className="upHeroBadge">WES</span>
              
              <div className="upHeroRating">
                ★ ★ ★ ★ ★ <span>2361 Reviews</span>
              </div>
            </div>

            {/* Subtext */}
            <div className="d-flex align-items-center gap-2 mt-2">
              <span className="upHeroSubtext">Not sure what you are looking for?</span>
              <div className="d-flex align-items-center ms-2 upHeroAvatars">
                 <div className="upHeroAvatar" style={{ zIndex: 3, backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&q=80)', backgroundSize: 'cover' }}></div>
                 <div className="upHeroAvatar" style={{ zIndex: 2, backgroundImage: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&q=80)', backgroundSize: 'cover' }}></div>
                 <div className="upHeroAvatar" style={{ zIndex: 1, backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&q=80)', backgroundSize: 'cover' }}></div>
              </div>
              <button 
                onClick={onEnquiryOpen} 
                className="upHeroTalkBtn"
              >
                Let's Talk &gt;
              </button>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="upHeroActions">
             <div className="d-flex gap-3 flex-column flex-sm-row">
               <button 
                 onClick={onEnquiryOpen}
                 className="upHeroBtn upHeroBtn--primary"
               >
                 Apply to University <span>&gt;</span>
               </button>
               <button 
                 onClick={onEnquiryOpen}
                 className="upHeroBtn upHeroBtn--secondary"
               >
                 Talk to University <span>💬</span>
               </button>
             </div>
             <div className="d-flex gap-3 flex-column flex-sm-row">

               <button 
                 onClick={onEnquiryOpen}
                 className="upHeroBtn upHeroBtn--text"
               >
                 Download Brochure <span>&darr;</span>
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
