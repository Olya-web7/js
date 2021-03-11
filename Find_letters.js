//Find letters in ukranian words that are written the same as English ones. 'Дерево' -> ['e', 'p', 'o']

function transliterate(word) {
  let sameLetters = [];
  let letters = [
    "А",
    "В",
    "С",
    "Н",
    "І",
    "К",
    "М",
    "а",
    "с",
    "е",
    "р",
    "і",
    "о",
    "х",
    "у",
  ];
  for (let i = 0; i < word.length; i++) {
    if (letters.includes(word[i]) && !sameLetters.includes(word[i])) {
      sameLetters.push(word[i]);
    }
  }
  console.log(sameLetters);
}
transliterate("дерево");
