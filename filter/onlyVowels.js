const arr = ["eye", "sky", "tooth"];

const onlyVowels = arr.filter((w) =>
  w.split("").every((c) => "aeiou".includes(c))
);

console.log(onlyVowels);
