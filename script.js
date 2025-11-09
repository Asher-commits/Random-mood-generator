// Object holding both emotions and levels

const moodAndLevel = {
emotions: ["Happy 😄", "Sad 😔", "Angry 😡", "Sleepy 😴", "Chilling 😎"],
levels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"]
};


// Tracker with matching emotions to keep track of how many times each emotion appears
let tracker = {
    "Happy 😄": 0,
    "Sad 😔": 0,
    "Angry 😡": 0,
     "Sleepy 😴": 0,
    "Chilling 😎": 0
};

// Function to generate random emotion and level

function generate(){
    const random = Math.floor(Math.random() * moodAndLevel.emotions.length);
    const mood = moodAndLevel.emotions[random];
    
    tracker[mood]++ // Adding 1 to the mood that appears

    console.log(`You are ${mood} so that puts you on ${moodAndLevel.levels[random]}`)
    console.log(`You have been ${mood} ${tracker[mood]} times`);

};

console.log(`Welcome to the random mood generator!`) ;


//Calling function
generate();

// For loop to run function 20 times 
for(let i = 0; i < 20; i++){
    generate();
};

console.log("Final mood count ⬇️:");

// For in to count times of each mood
for(let mood in tracker){
    console.log(`You have been ${mood} ${tracker[mood]} times`);
};
