// @flow
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImgContainer = styled.img`
  width: 40px;
  height: 80px;
`;

type Props = {
  imgSrc: string,
  name: string,
  title: string,
  guidingPrinciple: string,
  email: string,
};

export const TeamMemberTile = (props: Props) => {
  const { imgSrc, name, title, guidingPrinciple, email } = props;
  return (
    <Container>
      <ImgContainer src={imgSrc} />
      <RightContainer>
        <div>
          {name}, {title}
        </div>
        <div>Email: {email}</div>
        <div>Guiding Principle: {guidingPrinciple}</div>
      </RightContainer>
    </Container>
  );
};

export default TeamMemberTile;
