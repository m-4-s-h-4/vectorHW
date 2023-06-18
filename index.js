import "./styles.css";

function vector(x, y) {
  return { x, y, toString: () => `(${x}, ${y})` };
}

const add = (v1, v2) => vector(v1.x + v2.x, v1.y + v2.y);
const subtract = (v1, v2) => vector(v1.x - v2.x, v1.y - v2.y);
const multiply = (v, scalar) => vector(v.x * scalar, v.y * scalar);
const abs = (v) => Math.sqrt(v.x * v.x + v.y * v.y);
const unit = (v) => {
  const absValue = abs(v);
  return vector(v.x / absValue, v.y / absValue);
};
const direction = (v) => Math.atan2(v.y, v.x);

const a = vector(1, 2);
const b = vector(2, 0.5);

const sum = add(a, b);
const absValue = abs(sum);
const difference = subtract(a, b);
const product = multiply(a, 2);
const unitVector = unit(a);
const directionAngle = direction(a);

console.log("absValue: " + absValue);
console.log("difference: " + difference.toString());
console.log("product: " + product.toString());
console.log("unitVector: " + unitVector.toString());
console.log("directionAngle: " + directionAngle);
