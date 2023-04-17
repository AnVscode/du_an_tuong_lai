export const responsive = (min: number | null, max: number | null) =>
  ['@media']
    .concat(min ? [`(min-width: ${min}px)`] : [])
    .concat(min && max ? ['and'] : [])
    .concat(max ? [`(max-width: ${max}px)`] : [])
    .join(' ');

export const screenSize = {
  mobile: 360,
  tablet: 577,
  smallDesktop: 1024,
  mediumDesktop: 1200,
  largeDesktop: 1440,
};
