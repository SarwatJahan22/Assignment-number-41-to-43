// // Task# 41:
// // Magicians: Make a array of magician’s names. Pass the array to a function called 
// // show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians : string[]) : void {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string[] = ["john", "greece", "vicky"];
show_magicians(magician)



// // Task#42:
// // Great Magicians: Start with a copy of your program from Exercise 39.
// // Write a function called make_great() that modifies the array of magicians by 
// // adding the phrase the Great to each magician’s name. Call show_magicians() to see 
// // that the list has actually been modified.

//i stands for index string
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i]  + '  the great'
    }
}

const magicians2: string[] = ["john", "greece", "vicky"];
make_great(magicians2)
show_magicians(magicians2)


// // Task# 43:
// // Unchanged Magicians: Start with your work from Exercise 40. Call the function 
// // make_great() with a copy of the array of magicians’ names. Because the original 
// // array will be unchanged, return the new array and store it in a separate array. 
// // Call show_magicians() with each array to show that you have one array of the original
// // names and one array with the Great added to each magician’s name.

function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i ++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}

const magicians3: string[] = ["john", "greece", "vicky"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);



