// @flow
import { BlogType } from "../types";
import { Covid19Href, SiteName } from "./constants";
import { Routes } from "./routes";

export const BlogParentDeath: BlogType = {
    imgHref: Covid19Href,
    title: "Landlording In 2021",
    quote: "We inherited a property and didn't know what to do with it",
    date: "April 2021",
    author: "Ben",
    url: Routes.BlogDetail("landlording-2021-sell-house-cash"),
    paragraphs: [
        `After the passing of both of our parents, my sister and I inherited the house. We were living out of state, and the thought of becoming landlords felt too daunting and time-intensive.`,
        `The situation was really emotional for us, especially because this was the house we grew up in all of our childhoods.`,
        `We called Ben, and he came over and explained how the process would work, and to our delight he was able to give us a cash offer later that day. We were able to officially close and get our money 4 weeks later. The best part for us was that we didn't have to waste money fixing it up before selling, and we got to keep all of the value of the house because there was no realtor commission.`,
        `On the closing day Ben surprised us with a video call from our house to let us say our goodbyes and let go.`,
        `If you are considering selling your house, don't waste your time. Call Ben from ${SiteName}.`
    ]
};

// const blogProps = {
//     imgHref: TestimonialImageHref,
//     title: "Biden's Eviction Moratorium and its Effect on the Housing Market",
//     quote: "If you thought being a landlord was hard, get ready for even bigger challenges."
// }

export const BlogPosts = [
    BlogParentDeath,
];

export const getBlogFromUrl = (url: string) => {
    return BlogPosts.find(t => t.url === url)
}