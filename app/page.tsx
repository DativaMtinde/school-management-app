import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import learn from "./components/learn";
import Learn from "./components/learn";


export default function Home() {
  return ( 
    <>
     {/* <Header/> */}
    <HeroSection/>
    <About/>
    <Services />
    <Contact/>
   {/* <Learn /> */}

    </>
  ) 
}