import Image from "next/image";

export default function Learn() {
  return (
    <div id="about" className="bg-whitesmoke-500 h-screen">
      <div className="flex items-center justify-center h-full text-white text-4xl">

    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">learn more</h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image src="/sc4.jpg" alt="About Us" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
    
             

        {/* Text Section */}
        <div className="w-full md:w-1/2">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <strong>light high school</strong>, we are dedicated to providing high-quality education that empowers students with knowledge, 
            skills, and values to shape a brighter future.
             Our school fosters a nurturing and dynamic learning environment where students are encouraged to explore, innovate, and excel academically and socially.  

             </p>
             <p className="text-lg text-gray-700 mb-4">
                 Our Mission  
       To deliver a well-rounded education that nurtures intellectual growth, character development, and leadership skills in every student.  

                  Our Vision 
        To be a leading institution recognized for academic excellence, innovation, and holistic student development.  
        </p>

        <p className="text-lg text-gray-700 mb-4">
                  Core Values 
           Excellence - Striving for the highest academic and personal achievements.  
           Integrity  - Upholding honesty, responsibility, and respect in all we do.  
           Innovation- Encouraging creativity and problem-solving skills.  
           Collaboration- Fostering teamwork among students, teachers, and parents.  
           Empowerment- Equipping students with the skills to thrive in a global society. 
           </p> 

At Light Schools, we believe that education is the key to unlocking potential. Our dedicated teachers, modern facilities,
 and student-centered approach ensure that every learner receives the best foundation for success.  
 <p className="text-lg text-gray-700">
        
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
