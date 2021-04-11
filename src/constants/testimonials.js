// @flow
import { TestimonialType } from "../types";
import { Covid19Href, SiteName } from "./constants";
import { Routes } from "./routes";

export const TestimonialParentDeath: TestimonialType = {
    imgHref: Covid19Href,
    quote: "We inherited a property and didn't know what to do with it",
    name: "Adi",
    city: "Cooper City",
    county: "Broward",
    paragraphs: [
        `After the passing of both of our parents, my sister and I inherited the house. We were living out of state, and the thought of becoming landlords felt too daunting and time-intensive.`,
        `The situation was really emotional for us, especially because this was the house we grew up in all of our childhoods.`,
        `We called Ben, and he came over and explained how the process would work, and to our delight he was able to give us a cash offer later that day. We were able to officially close and get our money 4 weeks later. The best part for us was that we didn't have to waste money fixing it up before selling, and we got to keep all of the value of the house because there was no realtor commission.`,
        `On the closing day Ben surprised us with a video call from our house to let us say our goodbyes and let go.`,
        `If you are considering selling your house, don't waste your time. Call Ben from ${SiteName}.`
    ]
};

export const TestimonialTaxLien: TestimonialType = {
    imgHref: Covid19Href,
    quote: "They helped me get my financials back on track",
    name: "Carolina",
    city: "Hialeah",
    county: "Miami-Dade",
    paragraphs: [
        `2020 has been a hard year for me, and between credit cards and property taxes I just couldn't keep up.`,
        `I decided to move to Georgia for a lower cost of living and to be closer to my children and grandchildren. The biggest thing keeping me in Florida was my house. I bought it around 20 years ago and I just didn't have the time to renovate it and start dealing with realtors, inspectors, title companies etc.`,
        `I met a friend at my church who told me about her experience working with Nava. I gave her a call and she came over the next day with the contractor, they took a look at the house, and emailed me a cash offer. My house was sold within 3 weeks and I got my check from Nava just as we agreed. I was able to pay my debts and start my life all over again.`,
        `I was able to pay my debts and start my life all over again.`
    ]
};

export const TestimonialMoving: TestimonialType = {
    imgHref: Covid19Href,
    quote: "I had to move, fast",
    name: "Michael",
    city: "Boynton Beach",
    county: "Palm Beach",
    paragraphs: [
        `I got a job offer in Texas and I had to move. I decided to move out of Florida and needed to be in Texas within 4 weeks to start the new job.`,
        `Between wrapping up my current job and saying goodbye to family and friends, I had no time to deal with a real estate agent and set up viewings for interested in buyers. I needed a solution that would be quick, easy, and painless.`,
        `I was so happy to discover ${SiteName}. Ben came over, took a look at the house and was able to buy it as is. He helped coordinate so that the closing was the morning before I left for Texas, so I didn't have to worry about getting a hotel. Throughout the process, Ben and his colleagues answered any questions I had and made me feel super comfortable.`,
        `Thank you Ben for making my relocation smooth and easy.`
    ]
};

export const generateTestimonialUrl = (testimonial: TestimonialType) => {
    const params = [
        testimonial.name.toLowerCase(),
        ...testimonial.city.toLowerCase().split(" "),
    ]
    const param = params.join("-")
    return `${Routes.TestimonialDetail(param)}`
}

export const Testimonials = [
    TestimonialParentDeath,
    TestimonialTaxLien,
    TestimonialMoving
].map(testimonial => ({
    ...testimonial,
    url: generateTestimonialUrl(testimonial)
}))

export const getTestimonialFromUrl = (url: string) => {
    return Testimonials.find(t => t.url === url)
}