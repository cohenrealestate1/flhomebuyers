// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: -8px;
`

type Props = {
    children: ReactNode
}

export const Page = (props: Props) => {
    return <Container>
        <Header/>
        {props.children}
        <Footer />
    </Container>
}

export default Page;