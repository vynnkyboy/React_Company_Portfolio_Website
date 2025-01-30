import React, { useState } from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <div className="mt-20 tracking-wide" id="testimonials">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Berita Dan Pengumuman
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/2 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin flex flex-col items-center text-center">
              <img
                className="w-150 h-200 mb-3 border border-neutral-200 object-cover"
                src={testimonial.image}
                alt=""
              />
              <p className="mb-4">{testimonial.text}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => openModal(testimonial)}
              >
                Lihat Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
