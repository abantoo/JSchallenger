// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code



function myFunction(setA, setB) {

    return [...new Set([...setA, ...setB])]
}


//or 

function myFunction(set1, set2 ) {
    const set3  = new Set();
    set1.forEach((item) => set3.add(item));
    set2.forEach((item) => set3.add(item));
    return set3;
 }