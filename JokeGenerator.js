const jokes = ["Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    'Why did the bicycle fall over? Because it was two-tired!',
    "What's brown and sticky? A stick!",
    "How do you organize a space party? You \"planet\"!",
    "What do you call a bear with no teeth? A gummy bear!"
];

const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

const jokeGenerator = (jokes) => {
    randIndx = randomNumber(jokes.length);
    return jokes[randIndx];
}

const button = document.getElementById("button1");
button.addEventListener('click', () => {
    const joke = jokeGenerator(jokes);
    const res = document.getElementById('here');
    res.innerHTML = joke;
});