export const thousand = val => (
  val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
);

export const price = val => (`$ ${thousand(val)}`);