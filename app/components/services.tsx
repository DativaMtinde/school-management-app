"use client";

import { FaChalkboardTeacher, FaBook, FaLaptopCode, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <FaChalkboardTeacher className="text-blue-600 text-4xl" />,
    title: "Quality Education",
    description: "We provide high-quality education with experienced teachers and modern teaching methods.",
  },
  {
    icon: <FaBook className="text-green-600 text-4xl" />,
    title: "Library Services",
    description: "Our well-equipped library offers a wide range of books and digital resources for students.",
  },
  {
    icon: <FaLaptopCode className="text-red-600 text-4xl" />,
    title: "ICT & E-Learning",
    description: "We integrate technology into education with modern computer labs and online learning platforms.",
  },
  {
    icon: <FaUsers className="text-yellow-600 text-4xl" />,
    title: "Student Counseling",
    description: "We offer guidance and counseling services to support students' academic and personal growth.",
  },
];

export default function Services() {
  return (
    <div id="service" className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our School Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            {service.icon}
            <h3 className="text-xl font-semibold mt-3">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
