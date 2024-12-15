import FeaturedWorks from "@/components/home/FeaturedWorks";
import Hero from "@/components/home/Hero";
import MoodleCategories from "@/components/home/MoodleCategories";
import OpenStore from "@/components/notify-bar/OpenStore";
import { SiteMetadata } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SiteMetadata.title,
  description: SiteMetadata.description,
};

import React from 'react'

const Home = () => {
  return (
    <div className="pb-[80px]">
      <Hero />
      <OpenStore />
      <MoodleCategories />
      <FeaturedWorks />
    </div>
  )
}

export default Home
