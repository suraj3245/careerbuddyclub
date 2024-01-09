import React from "react";
import Image from "next/image";

const MapArea = () => {
  return (
    <div className="inner-banner-one position-relative pb-0">
      <div className="map-banner">
        <div className="gmap_canvas h-100 w-100">
          <iframe
            className="gmap_iframe h-100 w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.21085463589!2d77.90451237556528!3d30.344956874773683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2b308a7f7bc7%3A0xdd1898ddcd5d933c!2sGNC%20Dehradun!5e0!3m2!1sen!2sin!4v1704435602196!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapArea;
