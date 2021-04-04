// @flow
export * from "./cities";
export * from "./routes";
export * from "./styles";

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