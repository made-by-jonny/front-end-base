export const utility = {
  radio: 1.62,
  rootSize: 16,
  lineHeight: 1.5,
  borderRadius: 0,
};

export const leading = (): number => utility.rootSize * utility.lineHeight;

export const colors = {
  primaryBrand: "#000",
  secondaryBrand: "#000",
  tertiaryBrand: "#000",
  dark: "#000",
  text: "#666",
  subtleText: "#ccc",
  light: "#fff",
};

export const typography = {
  body: {
    size: utility.rootSize,
  },
  primaryTitle: {
    size: "4rem",
    lineHeight: 2 * leading(),
    marginTop: 3 * leading(),
    marginBottom: 1 * leading(),
  },
  secondaryTitle: {
    size: "2.5rem",
    lineHeight: 1.5 * leading(),
    marginTop: 2 * leading(),
    marginBottom: 1 * leading(),
  },
  tertiaryTitle: {
    size: "1.5rem",
    lineHeight: 2 * leading(),
    marginTop: 2.5 * leading(),
    marginBottom: 1 * leading(),
  },
  subHeading: {
    size: "1.5rem",
    lineHeight: 1.5 * leading(),
    marginTop: 2 * leading(),
    marginBottom: 0 * leading(),
  },
  preText: {
    size: "0.5rem",
    lineHeight: 1 * leading(),
    marginTop: 1 * leading(),
    marginBottom: 0 * leading(),
  },
  button: {
    size: "1rem",
    lineHeight: 1 * leading(),
    marginTop: 1 * leading(),
    marginBottom: 0 * leading(),
  },
};
