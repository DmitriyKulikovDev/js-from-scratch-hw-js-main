// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log("Число " + n1 + " - наибольшее");
        return n1        
    } else if (n2 > n1 && n2 > n3) {
        console.log("Число " + n2 + " - наибольшее");
        return n2
    } else if (n3 > n1 && n3 > n2) {
        console.log("Число " + n3 + " - наибольшее");
        return n3
    } 
}

findLargest(111, 89, 120)