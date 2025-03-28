import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Slogan */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">LIGHT SCHOOLS</h1>
          <h2 className="italic text-sm">where the stars rise</h2>
        </div>

       {/* Image Section */}
      <div className="w-24 h-16 relative">
          <Image 
            src="/sc3.jpg"
            alt="school"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
