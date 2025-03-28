"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4"></h2>
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <FaPhone className="text-blue-600 text-xl" />
          <p className="text-lg font-medium">
            <a href="tel:+255713493379" className="text-blue-600 hover:underline">
              +255 713 493 379
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-red-600 text-xl" />
          <p className="text-lg font-medium">
            <a href="mailto:lightschools@gmail.com" className="text-red-600 hover:underline">
              lightschools@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-green-600 text-xl" />
          <p className="text-lg font-medium">Dar es Salaam, Tanzania</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
