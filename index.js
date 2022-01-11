// replaces Turkish characters with English counterparts.
const asimile = (string) => {
  return string
    .toLowerCase()
    .replaceAll("ı", "i")
    .replaceAll("ö", "o")
    .replaceAll("ü", "u")
    .replaceAll("ç", "c")
    .replaceAll("ğ", "g")
    .replaceAll("ş", "s");
};

module.exports = asimile;
