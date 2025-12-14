"use client";

import { useState } from "react";
import Header from "@/app/components/user/Header";
import TopCard from "@/app/components/user/TopCard";
import Carousel from "@/app/components/user/Carrossel";
import InfoSection from "@/app/components/user/infoSection";
import CTA from "@/app/components/user/CTA";
import Footer from "@/app/components/user/Footer";


export default function App() {
  return (
    <div className="min-h-screen bg-white">

      <Header />

      <main className="pb-12">
        <div className="pt-6 bg-gray-900"></div>
        <TopCard />
        <Carousel />

        <div className="max-w-6xl mx-auto px-4 mt-6 text-center">
          <p className="text-gray-900">A Toyota oferece diversos modelos no</p>
        </div>

        <InfoSection />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
