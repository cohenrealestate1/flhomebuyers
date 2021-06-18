// @flow
import { BlogType } from "../types";
import { SiteName } from "./constants";
import { Routes } from "./routes";

export const BlogParentDeath: BlogType = {
    imgHref: "https://drive.google.com/thumbnail?id=1Vx6K7dhq73ezxCFByIe6Y-iiFEwKZYkY",
    title: "Landlording In 2021",
    quote: "If you thought being a landlord was hard, get ready for even bigger challenges.",
    date: "April 2021",
    author: "Ben",
    url: Routes.BlogDetail("landlording-2021-sell-house-cash"),
    description: "Landlording in 2021 becoming ever more difficult. We can help you offload troublesome investment properties at a price that makes sense for you.",
    paragraphs: [
        `2021 has been a challenging year, to say the least. The pandemic has made all facets of our lives more difficult in ways that we never thought possible. Owning an investment property is no exception.`,
        `At the start of the pandemic, the Federal US government put in place an eviction moratorium, making it much more difficult to evict tenants, even if they are not paying rent. While many large rental property businesses have enough cash on hand to weather the storm, many small- and mid-size landlords have not been so lucky. Countless landlords all across the country are defaulting on their mortgages because they have problematic tenants who are not paying rent, and they simply do not have enough money to pay the mortgage on their investment properties.`,
        `Prior to the start of the COVID-19 pandemic, evictions could typically be done within 30-45 days. Now, the wait is a minimum 6 months, meaning that the landlord has to pay the mortgage and all other property expenses for half of a year before they are able to once again see income.`,
        `Those who wish to enter the real estate market in 2021 should make sure they have enough reserves to be able to go 6-9 months without any rental income.`,
        `For landlords in tough situations, here at ${SiteName} we are able to help you get your financial freedom back by relieving you of problematic properties. We are experts at buying properties as-is, whether they have liens, code violations, open permits, delinquent taxes, unpaid utility bills, overdue HOA fees, or other tough situations.`,
        `If landlording has become a nightmare that's ruining your life - give us a call!`
    ]
};

export const BlogPosts = [
    BlogParentDeath,
];

export const getBlogFromUrl = (url: string) => {
    return BlogPosts.find(t => t.url === url)
}