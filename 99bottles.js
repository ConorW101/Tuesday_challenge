for (i = 100; i >= 1; i--) {
    if (i == 1) {
        console.log("No more bottles of beer on the wall, no more bottles of beer");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
    } 
    else if (i == 2) {
        console.log(i - 1 + " more bottle of beer on the wall,");
        console.log(i - 1 + " more bottle of beer");
        console.log("Take one down, pass it around,");
        console.log("No more bottles of beer on the wall")

    } 
    else {
        console.log(i - 1 + " bottles of beer on the wall,");
        console.log(i - 1 + " bottles of beer");
        console.log("Take one down, pass it around,");
        console.log(i - 2 + " more bottles of beer on the wall")
    } 
    console.log("")
} 
      