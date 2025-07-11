import Image from "next/image";
// import styles from "./page.module.css";
import { Header } from "@/components/Header";
import CarroselLetter from "@/components/Carrosel";
import HeroSection from "@/components/Hero";
import { AboutUs } from "@/components/aboutUs";

export default function Home() {
  return (
   <>
    <Header/>
    <CarroselLetter />
    <HeroSection/>
    <AboutUs/>
   </>
  );
}
