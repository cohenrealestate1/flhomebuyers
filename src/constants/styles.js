// @flow
export const Colors = {
    Blue: "#1562AB",
    Green: "#2BB673",
    Orange: "#FAAD78",
    White: "#FFFFFF",
    Gray1: "#F7F7F7",
    Gray2: "#343434",
    Gray3: "#5C5C5C",
    Red: "#EA121D"
}

export const FontFamilies = {
    M: 'font-family: Montserrat;',
    OS: 'font-family: Open Sans;'
}
export const LetterSpacing = `letter-spacing: 2px;`;
export const Uppercase = `text-transform: uppercase;`

export const Typographies = {
    LargeNumber: `
        ${FontFamilies.M}
        font-size: 100px;
        line-height: 122px;
        font-weight: 800;
    `,
    PageHeader: `
        ${FontFamilies.M}
        ${LetterSpacing}
        font-size: 90px;
        line-height: 90px;
        font-weight: 800;
    `,
    SubHeaderBig: `
        ${FontFamilies.M}
        ${LetterSpacing}
        font-size: 60px;
        font-weight: 700;
    `,
    SubHeaderMedium: `
        ${FontFamilies.OS}
        font-size: 50px;
        font-weight: 400;
        line-height: 68px;
    `,
    ButtonBig: `
        ${FontFamilies.OS}
        font-size: 40px;
        font-weight: 700;
        line-height: 55px;
    `,
    SubHeaderSmall: `
        ${FontFamilies.OS}
        font-size: 30px;
        font-weight: 700;
        line-height: 50px;
    `,
    TextXLarge: `
        ${FontFamilies.M}
        font-size: 30px;
        font-weight: 600;
        line-height: 45px;
    `,
    ButtonMedium: `
        ${FontFamilies.OS}
        font-size: 30px;
        font-weight: 700;
        line-height: 41px;
    `,
    TextLarge: `
        ${FontFamilies.M}
        font-size: 30px;
        font-weight: 800;
        line-height: 37px;
    `,
    FormSubmitButton: `
        ${FontFamilies.M}
        font-size: 26px;
        font-weight: 700;
        line-height: 32px;
    `,
    TextMedium: `
        font-size: 25px;
    `,
    TextSmall: `
        font-size: 20px;
    `,
    TextXSmall: `
        font-size: 18px;
    `
};
