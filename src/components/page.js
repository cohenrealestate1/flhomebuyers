// @flow
import { assetUrl } from "fusion-core";
import { Helmet } from 'fusion-plugin-react-helmet-async';
import React, { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";
import LinkFooter from "./link-footer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: -8px;
`

type Props = {
    children: ReactNode,
}

export const Page = (props: Props) => {
    return <Container>
        <Helmet>
            <link rel="icon" type="image/png" href={assetUrl("../static/favicon.ico")}/>
        </Helmet>
        <Header />
        {props.children}
        <LinkFooter />
        <Footer />
    </Container>
}

export default Page;