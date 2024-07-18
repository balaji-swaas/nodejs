const studentMarks = {
    "maths": 7,
    "physics": 8,
    "chemistry": 2,
    "biology": 0
};
/* Input */
/* Logic Implementation Function */
let cutoff = 0;
let data=0;
function calculateCutoff(marksJson) {
    data=studentMarks.maths+studentMarks.physics+studentMarks.biology+studentMarks.chemistry;
    cutoff=data/4;
    console.log('The cutoff is:'+ cutoff);
}
const eligibilityCutOff = 75;
function checkEligibility(mark){
    if(cutoff>=75){
        console.log("Eligible");
    }
    else{
        console.log("Not Elgible");
    }
   
    }
/* Logic Implementation Function */


/* Function Call */
calculateCutoff(studentMarks);
checkEligibility(cutoff);
/* Function Call */

/* Expected Output */

// The cutoff is: 77.80
// You are Eligible

/* Expected Output */
