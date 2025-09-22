//a
const translations: Record<string, string> = {
  hello: "hei",
  world: "maailma",
  bit: "bitti",
  byte: "tavu",
  integer: "kokonaisluku",
  boolean: "totuusarvo",
  string: "merkkijono",
  network: "verkko",
};
console.log(translations);
/*
{
  hello: 'hei',
  world: 'maailma',
  bit: 'bitti',
  byte: 'tavu',
  integer: 'kokonaisluku',
  boolean: 'totuusarvo',
  string: 'merkkijono',
  network: 'verkko'
}
  */

//b
const printTranslatableWords = (): string[] => {
  return Object.keys(translations);
};
console.log(printTranslatableWords());
/*
[
  'hello',   'world',
  'bit',     'byte',
  'integer', 'boolean',
  'string',  'network'
]
  */

//c
const translate = (w: string): string => {
  return translations[w] ?? "translate no found";
};
console.log(translate("network")); //verkko
console.log(translate("network!")); //translate no found

//d
const translateV2 = (w: string): string | null => {
  if (translations[w] !== undefined) {
    return translations[w];
  } else {
    console.log(`No translation exists for word "${w}" given as the argument`);
    return null;
  }
};
console.log(translateV2("network")); //verkko
console.log(translateV2("network!"));
/*
No translation exists for word  network!
null
*/
