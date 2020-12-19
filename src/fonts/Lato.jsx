import LatoRegular from "./Lato-Regular.ttf";

const LatoFont = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
    local('Lato'),
    local('Lato-Regular'),
    url(${LatoRegular}) format('ttf')
  `
};
export default LatoFont;
