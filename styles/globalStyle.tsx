import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.typography.body.size}px;
    overflow-x: hidden;
    line-height: ${({ theme }) => theme.utility.lineHeight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  * {
    line-height:  ${({ theme }) => theme.leading()}px;
    margin-bottom:  ${({ theme }) => theme.leading()}px;
  }

  h1,h2,h3,h4,h5,h6 {
    color: ${({ theme }) => theme.colors.dark};
    line-height:  ${({ theme }) => theme.typography.subHeading.lineHeight}px;
    margin-bottom:  ${({ theme }) =>
      theme.typography.subHeading.marginBottom}px;
    margin-top:  ${({ theme }) => theme.typography.subHeading.marginTop}px;  
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.primaryTitle.size};
    line-height:  ${({ theme }) => theme.typography.primaryTitle.lineHeight}px;
    margin-bottom:  ${({ theme }) =>
      theme.typography.primaryTitle.marginBottom}px;
    margin-top:  ${({ theme }) => theme.typography.primaryTitle.marginTop}px;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.secondaryTitle.size};
    line-height:  ${({ theme }) =>
      theme.typography.secondaryTitle.lineHeight}px;
    margin-bottom:  ${({ theme }) =>
      theme.typography.secondaryTitle.marginBottom}px;
    margin-top:  ${({ theme }) => theme.typography.secondaryTitle.marginTop}px;
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.tertiaryTitle.size};
    line-height:  ${({ theme }) => theme.typography.tertiaryTitle.lineHeight}px;
    margin-bottom:  ${({ theme }) =>
      theme.typography.tertiaryTitle.marginBottom}px;
    margin-top:  ${({ theme }) => theme.typography.tertiaryTitle.marginTop}px;
  }
  
`;

export default GlobalStyle;
