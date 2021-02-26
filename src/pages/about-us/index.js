// @flow
import React from "react";
import Page from "../../components/page";
import WhoWeAre from "./who-we-are";
import MeetTheTeam from "./meet-the-team";

export const AboutUs = () => {
  return (
    <Page
      content={
        <>
          <div>
            <WhoWeAre />
          </div>
          <div>
            <MeetTheTeam />
          </div>
        </>
      }
    />
  );
};

export default AboutUs;
