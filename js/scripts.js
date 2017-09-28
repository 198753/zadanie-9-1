var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(5, -7),
	triangle3Area = getTriangleArea(10, 0);


function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)) {
		return ('Nieprawidłowe dane');
	}
	else {
		return (a*h/2);
	}
}
console.log(getTriangleArea(10, 6));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);