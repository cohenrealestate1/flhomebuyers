// @flow
import { assetUrl } from "fusion-core";
import { Helmet } from 'fusion-plugin-react-helmet-async';
import React, { ReactNode } from "react";
import styled from "styled-components";
import { SiteName } from "../constants";
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
    title: string;
    description: string;
}

export const Page = (props: Props) => {
    const {children, title, description} = props;
    return <Container>
        <Helmet>
            <title>{title} | {SiteName}</title>
            <meta key="head-meta-og:title" property="og:title" content={title} />
            <meta key="head-meta-description" name="description" content={description}/>
            <meta key="head-meta-og:description" property="og:description" content={description}/>
            <meta key="head-meta-og:site_name" property="og:site_name" content={SiteName}/>
            <meta key="head-meta-image" property="og:image" content={assetUrl("../static/favicon.png")}/>
            <meta charset="UTF-8"/>
            <link rel="icon" type="image/png" href={assetUrl("../static/favicon.png")}/>
        </Helmet>
        <Header />
        {children}
        <LinkFooter />
        <Footer />
    </Container>
}

export default Page;