import Image from "next/image";
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import Form from '../Components/Form/Form';
import CardService from '../Components/CardService/CardService'
import Writings1 from "@/Components/Writings/Writings1";
import VideoCard from "@/Components/VideoCard/VideoCard";
import LoanContainer from "@/Components/LoanContainer/LoanContainer";
import TestimonialsContainer from "@/Components/Testimonials/Testimonials";
import Footer from "@/Components/Footer/Footer";
import VideoCard2 from '../Components/VideoCard2/VideoCard2'
import InsuranceContainer from '../Components/InsuranceContainer/InsuranceContainer'
import './globals.css'
import ParagraphSection from "@/Components/Paragraph1/paragraph";
import HowItWorks from "@/Components/HowItWorks/howItWorks";
import SuccessStories from "@/Components/SuccessStories/SucessStories";
export default function Home() {
  return (
    <>
    <div className="bg-white">
    <Header /> 
     {/* <Banner /> */}
      <Form />
      <CardService />
      <Writings1/>
     
      <ParagraphSection/>
      <LoanContainer />
      <VideoCard2 />
      <HowItWorks/>
      <InsuranceContainer />
     <SuccessStories/>
      {/* <TestimonialsContainer /> */}
      <Footer />
      </div>
      </>
  );
}
