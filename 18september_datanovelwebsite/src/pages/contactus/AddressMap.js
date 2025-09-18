import React from "react";

const AddressMap = () => {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-10 col-sm-12">
          <h4 style={{ color: "#2563eb", marginBottom: "15px" }}>
            📍 DataNovelTech Office Location
          </h4>
          <iframe
            title="Novel Office Location"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62211.0277099533!2d77.68871179825679!3d12.959739953270448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snovel%20office%20location!5e0!3m2!1sen!2sin!4v1757327456641!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AddressMap;
