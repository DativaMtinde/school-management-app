import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="bg-whitesmoke-500 h-screen">
      <div className="flex items-center justify-center h-full text-white text-4xl">

    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Us</h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image src="/sc2.jpg" alt="About Us" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
    
             

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <strong>light high school</strong>, we believe in fostering an environment where students not only excel academically 
            but also grow into well-rounded individuals with strong moral values. Founded in Year,
             our institution has become a cornerstone of educational excellence in the community.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With years of experience in the industry, we have built a reputation for excellence, customer satisfaction, and cutting-edge solutions.
          </p>
          <p className="text-lg text-gray-700">
            Join us on our journey as we continue to make a positive impact in our field.
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
