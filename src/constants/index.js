// @flow
export * from "./cities";
export * from "./constants";
export * from "./routes";
export * from "./styles";
export * from "./testimonials";

export const PhoneNumber = "(954) 613-1230";
export const PhoneNumberHref = "tel:954-613-1230";

export const Email = "flhomecashbuyers1@gmail.com";
export const EmailHref = `mailto:${Email}`;

export const SocialMediaLinks = {
    Twitter: "https://twitter.com/flhomecashbuyrs",
    Facebook: "https://www.facebook.com/FL-Home-Cash-Buyers-110603414412760",
    Youtube: "https://www.youtube.com/channel/UCOEdpeaJBH3PIQlu0i_Pg9g",
    Instagram: "https://www.instagram.com/flhomecashbuyers/",
    LinkedIn: "https://www.linkedin.com/company/fl-home-cash-buyers/",
};

export const ExternalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
};
  
export const makeMediaQuery = (maxWidth: number, query: string) => {
    return `
      @media only screen and (max-width: ${maxWidth}px) {
        ${query}
      }
    `;
  };

export const CashVsRealtorItems = [
  {
    title: "Commissions and fees",
    cash: "You pay NOTHING!",
    realtor: "You pay 6% on average",
  },
  {
    title: "Closing Costs",
    cash: "You pay NOTHING!",
    realtor: "You pay 2% on average",
  },
  {
    title: "Closing Date",
    cash: "WHENEVER YOU WANT!",
    realtor: "30-60 days or longer",
  },
  {
    title: "Appraisal",
    cash: "You DON'T have to worry about an appraisal coming through!",
    realtor: "Sale typically requires appraisal",
  },
  {
    title: "Mortgage Financing",
    cash: "You don't have to worry about mortgage financing!",
    realtor: "Sales can fall through if lender doesn't approve",
  },
  {
    title: "Repairs",
    cash: "NONE - we take the property completely AS IS!",
    realtor: "Seller often has to do property repairs to sell",
  },
  {
    title: "Showings",
    cash: "You will NOT have to show your property to potential buyers!",
    realtor:
      "You will need to show 10+ times on average to find the right buyer",
  },
];
