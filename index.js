// Your code here

// Your code here

class Polygon{
    constructor(sides){
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let initialValue = 0
        let perimeter = this.sides.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
        return perimeter
    }
}
class Triangle extends Polygon {
    get isValid(){
        let [a, b, c] = this.sides
        if (a+b > c && a+c > b && b+c > a) {
            return true
        }
        else
        return false
    }

}

class Square extends Polygon {
    get isValid() {
        let [a, b, c, d] = this.sides
        if (a==b && b==c && c==d) {
            return true
        }
        else
        return false
    }

    get area() {
        let [a, b, c, d] = this.sides
        return a * b;

    }
}