import React from "react";

function Map() {
  return (
    <>
      <div className="h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2347555659853!2d73.81195577599179!3d18.47302267062344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295b7644d8d2f%3A0xbfb20b107c24e6cb!2saPc%20Web%20Works!5e0!3m2!1sen!2sin!4v1694517635133!5m2!1sen!2sin"
          className="w-full md:h-full"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
