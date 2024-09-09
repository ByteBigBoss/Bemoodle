import Hero from "@/components/home/Hero";
import MoodleCategories from "@/components/home/MoodleCategories";
import OpenStore from "@/components/notify-bar/OpenStore";
import CheckServlet from "@/components/system/CheckServlet";
import { SiteMetadata } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SiteMetadata.title,
  description: SiteMetadata.description,
};

import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero/>
      <OpenStore/>
      <MoodleCategories/>

      <CheckServlet/>
    </div>
  )
}

export default Home
