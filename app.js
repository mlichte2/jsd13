const button = document.querySelector("#button");
const words = document.querySelector("#results");

button.addEventListener("click", function () {
  const random = Math.floor(Math.random() * 20);
  words.innerText = sayings[random];
  console.log(sayings[random]);
});

const sayings = {
  0: "As I see it, yes",
  1: "Ask again later",
  2: "Better not tell you now",
  3: "Cannot predict now",
  4: "Concentrate and ask again",
  5: "Don’t count on it",
  6: "It is certain",
  7: "It is decidedly so",
  8: "Most likely",
  9: "My reply is no",
  10: "My sources say no",
  11: "Outlook good",
  12: "Outlook not so good",
  13: "Reply hazy try again",
  14: "Signs point to yes",
  15: "Very doubtful",
  16: "Without a doubt",
  17: "Yes",
  18: "Yes, definitely",
  19: "You may rely on it",
};
