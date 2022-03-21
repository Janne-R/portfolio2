const sizes = {
  mobileS: '320px',
  mobileL: '480px',
  tabletS: '768px',
  tabletL: '820px',
  laptopS: '1024px',
  laptopL: '1200px',
  desktop: '2560px'
};

const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tabletS: `(min-width: ${sizes.tabletS})`,
  tabletL: `(min-width: ${sizes.tabletL})`,
  laptopS: `(min-width: ${sizes.laptopS})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const colors = {
  primaryBackgroundColor: "#DBDBDB",
  secondaryBackgroundColor: "#FFFFFF",
  ctaColor: "#B77B58",
  highlightColor: "#000000"
};

export default {
  sizes, devices, colors
};