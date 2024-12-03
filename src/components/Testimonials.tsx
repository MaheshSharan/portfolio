import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    title: "Professor, IIT Bombay",
    image: "testimonials/professor1.svg",
    text: "Mahesh's work in deep learning and computer vision is exceptional. His Badminton Shuttle Detection project showcases innovative application of AI in sports analytics.",
  },
  {
    name: "Dr. Priya Sharma",
    title: "AI Research Lead, TCS Innovation Labs",
    image: "testimonials/researcher1.svg",
    text: "Having mentored Mahesh during his internship, I was impressed by his ability to tackle complex AI problems with creative solutions. His dedication to learning and implementing cutting-edge technologies is remarkable.",
  },
  {
    name: "Arun Verma",
    title: "Tech Lead, Flipkart AI",
    image: "testimonials/techlead1.svg",
    text: "Mahesh's contributions to our AI initiatives were significant. His deep understanding of machine learning algorithms and practical implementation skills make him a valuable asset to any tech team.",
  },
  {
    name: "Dr. Suresh Venkat",
    title: "Associate Professor, IIIT Hyderabad",
    image: "testimonials/professor2.svg",
    text: "As Mahesh's project guide, I witnessed his exceptional problem-solving abilities in AI. His work on document analysis using deep learning demonstrates both technical expertise and practical application.",
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feedback from professors and industry professionals who have worked with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'testimonials/placeholder.svg';
                  }}
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-indigo-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;