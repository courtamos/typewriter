const sentence = "hello there from lighthouse labs";

let current = 0; // counter var for each char of sentence

for (const char of sentence) { // looping through sentence by char
  setTimeout(() => { // setTimeout
    process.stdout.write(char); // write out char
  }, 50 * current); // timeout is 50 * current (current char)

  current ++; // current will incriment by 1 each loop
}

setTimeout(() => { // output a newline char before exiting
  console.log();
}, 50 * sentence.length);