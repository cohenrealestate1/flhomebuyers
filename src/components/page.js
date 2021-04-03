// @flow
import React from "react";
import styled from "styled-components";
import Form from "./form";
import Header from "./header";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: -8px;
`

export const Page = () => {
    return <Container><Header/><Form /></Container>
}

export default Page;