// @flow
import { Typography } from "../../constants";
import styled from "styled-components";

const KeyToCSS = {
  fontSize: "font-size",
  fontWeight: "font-weight",
  lineHeight: "line-height",
};

const TypographyTypeToStyledComponentsMethod = {
  p: styled.div,
  h1: styled.h1,
  h2: styled.h2,
  h3: styled.h3,
  h4: styled.h4,
  h5: styled.h5,
  h6: styled.h6,
};

const createStyled = (
  typographyType: any
) => TypographyTypeToStyledComponentsMethod[typographyType.type]`
  margin: 0;
  ${Object.keys(typographyType)
    .map((key) =>
      KeyToCSS[key] ? `${KeyToCSS[key]}: ${typographyType[key]};` : ""
    )
    .join(" ")}
    font-weight: ${(props) =>
      props.$noBold ? "normal" : typographyType.fontWeight}
`;

export const ParagraphXSmall = createStyled(Typography.ParagraphXSmall);
export const ParagraphSmall = createStyled(Typography.ParagraphSmall);
export const ParagraphMedium = createStyled(Typography.ParagraphMedium);
export const ParagraphLarge = createStyled(Typography.ParagraphLarge);
export const LabelXSmall = createStyled(Typography.LabelXSmall);
export const LabelSmall = createStyled(Typography.LabelSmall);
export const LabelMedium = createStyled(Typography.LabelMedium);
export const LabelLarge = createStyled(Typography.LabelLarge);
export const HeadingXSmall = createStyled(Typography.HeadingXSmall);
export const HeadingSmall = createStyled(Typography.HeadingSmall);
export const HeadingMedium = createStyled(Typography.HeadingMedium);
export const HeadingLarge = createStyled(Typography.HeadingLarge);
export const HeadingXLarge = createStyled(Typography.HeadingXLarge);
export const HeadingXXLarge = createStyled(Typography.HeadingXXLarge);
export const DisplayXSmall = createStyled(Typography.DisplayXSmall);
export const DisplaySmall = createStyled(Typography.DisplaySmall);
export const DisplayMedium = createStyled(Typography.DisplayMedium);
export const DisplayLarge = createStyled(Typography.DisplayLarge);
