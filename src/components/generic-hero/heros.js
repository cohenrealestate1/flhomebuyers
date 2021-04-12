// @flow
import React from "react";
import { BlogPosts, Colors, Routes } from "../../constants";
import GenericHero from "./index";

export const AboutUsHero = () => <GenericHero 
    buttonBackgroundColor={Colors.Green} 
    buttonTextColor={Colors.Green}
    backgroundColor={Colors.Green}
    title="About Us" 
    description="We buy houses, multi-family, apartments, and condos in the South Florida, Treasure Coast, and Gulf Coast areas." 
    href={Routes.AboutUs} 
    buttonText="Meet the Team" 
    />
export const Covid19Hero = () => <GenericHero 
    buttonBackgroundColor={Colors.Blue} 
    buttonTextColor={Colors.Blue}
    backgroundColor={Colors.Blue}
    title="Covid-19" 
    description="We are committed to keeping our customers safe. N95 masks, face shields, and doing things virtually when possible help us do that." 
    href={Routes.Covid19} 
    buttonText="Learn More" 
    />

const firstBlog = BlogPosts[0];
export const BlogHero = () => <GenericHero 
    buttonBackgroundColor={Colors.White} 
    buttonTextColor={Colors.Orange}
    backgroundColor={Colors.Orange}
    title={firstBlog.title}
    description={firstBlog.quote}
    href={firstBlog.url} 
    buttonText="Read Full Post" 
    pretitle="From the Blog"
    />