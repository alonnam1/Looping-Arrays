for(let i = 1000; i >= 0; i-=2) {
    console.log(i);
}

for(let i = 0; i <= 10000; i++) {
    if(i === 2500) {
        alert("A quarter of the way there!");
    } else if(i === 5000) {
        alert("Halfway there!");
    } if(i === 10000) {
        alert("The loop is done!");
    }
}

const favoriteshows = ["Criminal Minds", "Grey's Anatomy", "911", "My Wife and Kids", "Dr.Pol Vet"]
for(let i = 0; i < favoriteshows.length; i++) {
    console.log("My #" + [i+1] + " favorite TV show is " + favoriteshows[i])
}