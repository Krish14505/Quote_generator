/*Plan before the js code:-
--> list of jokes around 15 and store them into an array of Jokes
--> Choose a random number in between 0th index to array.length-1 
--> assingn that random number with the element of the array Jokes
    and show it on the web page accordingly.
*/

//Here we have tones of Jokes hahahah....
let inspirations = [
    
        "The best time to plant a tree was 20 years ago. The second best time is now.",
 
        "An unexamined life is not worth living.",
 
        "Eighty percent of success is showing up.",
 
        "Your time is limited, so don’t waste it living someone else’s life.",
 
        "Winning isn’t everything, but wanting to win is.",
 
        "I am not a product of my circumstances. I am a product of my decisions.",
 
        "Every child is an artist.  The problem is how to remain an artist once he grows up.",
 
        "You can never cross the ocean until you have the courage to lose sight of the shore." ,
 
        "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." ,
 
        "Either you run the day, or the day runs you." ,
 
        "Whether you think you can or you think you can’t, you’re right." ,
 
        "The two most important days in your life are the day you are born and the day you find out why." ,
 
        "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it." ,
 
        "The best revenge is massive success.",
 
        "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily." ,
 
        "Life shrinks or expands in proportion to one’s courage.",
 
        "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
 
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
 
        "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
 
        "The only person you are destined to become is the person you decide to be.",
 
        "Go confidently in the direction of your dreams.  Live the life you have imagined.",
 
        "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
 
        "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",

        "Certain things catch your eye, but pursue only those that capture the heart.",
 
        "Believe you can and you’re halfway there.",
 
        "Everything you’ve ever wanted is on the other side of fear.",
 
        "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
 
        "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
 
        "Start where you are. Use what you have.  Do what you can.",
 
        "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life."
];




//function to generate the random number as the index of the inspiration array

function showInspiration() {
    //Now create a random number in the range of its length-1 and assign it 
    let min = 0;
    let max = inspirations.length - 1 ;
    let random = Math.floor(Math.random() * max + min );
    let element = document.getElementById("text");
    element.innerHTML = inspirations[random];

}


let buttonClick = document.getElementById("myBtn");
buttonClick.addEventListener("click",showInspiration);

