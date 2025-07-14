let score = 80;
let grade;
if (!(score < 0 && score > 100)) {
    console.log("invalid score");  
}else if (score === 100) {
    console.log("A+");
}else if (score >= 90) {
    console.log("A");
}else if (score >= 80) {
    console.log("B");
}else if (score >= 70) {
    console.log("C");
}else if (score >= 60) {
    console.log("D");
}else if (score >= 40) {
    console.log("E");
}else {
    console.log("F");
}
switch(grade) {
    case "A+" : 
        console.log("A+");
        break;

    case "A" : 
        console.log("A");
        break;
    case "B" : 
        console.log("B");
        break;
    case "C" : 
        console.log("C");
        break;
    case "D" : 
        console.log("D");
        break;
    case "E" : 
        console.log("E");
        break;
    case "F":
        console.log("F");
        break;
    default:
        console.log("invalid score");
}
