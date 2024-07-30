let score = prompt("enter a marks");

if (score <= 100 && score >= 80) {
    console.log("A Grade");
}
else if (score <= 80 && score >= 60) {
    console.log("B Grade");
}
else if(score<=60 && score>=1) {
    console.log("C Grade");
}
else{
    console.log("enter valid score")
}
