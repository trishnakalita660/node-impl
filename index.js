var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};

function solveRect(l, b) {
    console.log("Solving for Rectangle with l = " + l + " and b = " + b);
    if (l <= 0 || b <= 0) {
        console.log("Dimensions imaginary");


    }
    else{
        console.log("Area of rectangle is : "+ rect.area(l,b)+" perimenter is :"+ rect.perimeter(l,b));
        
    }

}
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);