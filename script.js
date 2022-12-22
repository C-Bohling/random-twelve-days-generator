const itemsPlural = [
    "drummers",
    "pipers",
    "lords", 
    "ladies",
    "maids",
    "swans",
    "geese",
    "rings",
    "birds",
    "hens",
    "doves",
    "partridges",
    "bugs"
];

const itemsSingular = [
    "drummer",
    "piper",
    "lord",
    "lady",
    "maid",
    "swan",
    "goose",
    "ring",
    "bird",
    "hen",
    "dove",
    "partridge",
    "bug"
];

const verbsList = [
    "drumming",
    "piping",
    "a-leaping",
    "dancing",
    "a-melting",
    "a-swimming",
    "a-laying",
    "a-working",
    "a-bouncing"
];

const adjectivesList = [
    "golden",
    "calling",
    "French",
    "turtle",
    "pear",
    "angry",
    "starving",
    "funny"
];

const numbers = [
    "Twelve",
    "Eleven",
    "Ten",
    "Nine",
    "Eight",
    "Seven",
    "Six",
    "Five",
    "Four",
    "Three",
    "Two",
    "A"
];

const getRandomWord = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomWords = (originalArr, length) => {
    let words = [];

    // To fix undefined
    let arr = [...originalArr]

    for (let i = 0; i < length; i++) {
        let randomWord = getRandomWord(arr);
        words.push(randomWord);
        const itemIndex = arr.indexOf(randomWord);
        arr.splice(itemIndex, 1);
    }

    return words;
}

const generateLyrics = () => {
    const pluralNouns = getRandomWords(itemsPlural, 11);
    const singularNoun = getRandomWord(itemsSingular); //This one is a string! REMEMBER THAT
    const verbs = getRandomWords(verbsList, 7);
    const adjectives = getRandomWords(adjectivesList, 5);
    let lyrics = ["On the twelfth day of Christmas this algorithm sent to me"];

    numbers.forEach((number, i) => {
        let newLine = "";
        if (i < 7) {
            newLine = `${number} ${pluralNouns[i]} ${verbs[i]}`;
        } else if (i < 10) {
            newLine = `${number} ${adjectives[i-7]} ${pluralNouns[i]}`;
        } else if (i === 10) {
            newLine = `${number} ${adjectives[i-7]} ${pluralNouns[i]}, and`;
        } else {
            newLine = `${number} ${singularNoun} in a ${adjectives[i-7]} tree!`;
        }
        lyrics.push(newLine);
    })

    // console.log(lyrics);
    return lyrics;
}

const randomize = () => {
    const lyrics = generateLyrics();
    const songElement = document.getElementById("song")
    songElement.innerHTML = lyrics.join("<br>");
    console.log(itemsPlural);
}

console.log(itemsPlural);