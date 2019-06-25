export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  }
};



// export function triangleType(s1, s2, s3) {
//   if (s1 + s2 <= s3 || s1 + s3 <=s2 || s2 + s3 <= s1) {
//     return "Not a triangle";
//   }
//   if (s1 === s2 && s1 === s3 && s2 === s3) {
//     return "Equilateral";
//   } else if (s1 !== s2 && s1 !== s3 && s2 !== s3) {
//     return "Scalene";
//   } else if (s1 === s2 || s1 === s3 || s2 === s3) {
//     return "Isosceles";
//   }
// }
