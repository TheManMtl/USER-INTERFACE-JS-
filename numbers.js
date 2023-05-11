/*
 * Ehsan KH. Motlagh
 * student ID: 2340457
 * */

/**
 * calculates square of number
 * @param {number} numberSQ 
 * @returns {number}
 */
function squareNumber(numberSQ) {
    let sqNum = numberSQ * numberSQ;
    console.log("The result of squaring the number " + numberSQ +
        " is " + sqNum + ".");
    return sqNum;
}
/**
 * calculates the half o a number
 * @param {number} numberHalf 
 * @returns {number}
 */
function halfNumber(numberHalf) {
    let halfNum = numberHalf / 2;
    console.log("Half of " + numberHalf + " is " + halfNum + ".");
    return halfNum;
}
/**
 * finds the percentage of second number versus dirst one
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number}
 */
function percentOf(number1, number2) {
    let percentNum = number1 / number2 * 100;
    console.log(number1 + " is " + percentNum +
        "% of " + number2 + ".");
    return percentNum;
}

/**
 * calculates area of circle
 * @param {number} radius 
 * @returns {number}
 */
function areaOfCircle(radius) {
    let areaCircle = Math.PI * radius * radius;
    console.log("The area for a circle with radius " +
        radius + " is " + areaCircle + ".");
    return areaCircle;
}
/**
 * Divides the number in half
 * then square the result
 * afterwards find the area of circle
 * and at last calculate the percrntage of area to square
 * @param {number} number 
 */
function allTheStuff(number) {
    let half = halfNumber(number);
    let square = squareNumber(half);
    let area = areaOfCircle(square);
    let percentageOfarea = percentOf(area, square);
}