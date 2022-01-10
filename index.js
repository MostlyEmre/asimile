// replaces Turkish characters with English counterparts.
const asimile = (string) => {
  return string.toLowerCase().replace("ı", "i").replace("ö", "o").replace("ü", "u").replace("ç", "c").replace("ğ", "g").replace("ş", "s");
};

module.exports = asimile;
