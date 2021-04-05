// @flow
import React from "react";
import { Colors, Routes } from "../../constants";
import GenericHero from "./index";

export const AboutUsHero = () => <GenericHero 
    color={Colors.Green} 
    title="About Us" 
    description="We buy houses, multi-family, apartments, and condos in the South Florida, Treasure Coast, and Gulf Coast areas." 
    href={Routes.AboutUs} 
    buttonText="Meet the Team" 
    />
export const Covid19Hero = () => <GenericHero 
    color={Colors.Blue} 
    title="Covid-19" 
    description="We are committed to keeping our customers safe. N95 masks, face shields, and doing things virtually when possible help us do that." 
    href={Routes.Covid19} 
    buttonText="Learn More" 
    />
export const BlogHero = () => <GenericHero 
    color={Colors.Orange} 
    title="Post Title Here" 
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    href={Routes.Blog} 
    buttonText="Read Full Post" 
    pretitle="From the Blog"
    />