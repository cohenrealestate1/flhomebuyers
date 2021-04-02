// @flow
import React from "react";
import TeamMemberTitle from "./team-member-tile";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const MeetTheTeam = () => {
  return (
    <Container>
      <TeamMemberTitle
        imgSrc="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-blue-solid-color-background.jpg"
        name="Ben"
        title="The Behind the scenes guy"
        guidingPrinciple="Blah"
        email="ben@flhousebuyers.com"
      />
      <TeamMemberTitle
        imgSrc="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-blue-solid-color-background.jpg"
        name="Ben"
        title="The Behind the scenes guy"
        guidingPrinciple="Blah"
        email="ben@flhousebuyers.com"
      />
      <TeamMemberTitle
        imgSrc="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-blue-solid-color-background.jpg"
        name="Ben"
        title="The Behind the scenes guy"
        guidingPrinciple="Blah"
        email="ben@flhousebuyers.com"
      />
      <TeamMemberTitle
        imgSrc="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-blue-solid-color-background.jpg"
        name="Ben"
        title="The Behind the scenes guy"
        guidingPrinciple="Blah"
        email="ben@flhousebuyers.com"
      />
    </Container>
  );
};

export default MeetTheTeam;

// a family-run business. My Dad, Eli is a General Contractor with over 20 years of experience with all kinds of remodeling and construction projects. My mom Nava does the talking and manages communications. And I run
