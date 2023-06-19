let inputWeight=prompt("Enter weight(kg):");
let inputHeight=prompt("Enter height(m):");
let weight=parseFloat(inputWeight);
let height=parseFloat(inputHeight);
let bmi=weight/(height*height);
if (bmi<18.5) {
   document.write("Underweight") ;
} else if (18.5<=bmi && bmi<25.0) {
    document.write("Normal") ;
    } else if (25.0<=bmi && bmi <30.0) {
    document.write("Overweight") ;
    } else {
    document.write("Obese") ;
}