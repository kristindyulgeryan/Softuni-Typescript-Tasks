function convertArr(words: string[]): [string, number] {
  const text = words.join("");
  return [text, text.length];
}
console.log(convertArr(["How", "are", "you?"]));
