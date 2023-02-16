const [a] = [190]
console.log(a)
const [n1, n2, ,n4, n5, n6 = 10] = [12, 24, 36, 48, 60]
console.log(n1, n2, n4, n5, n6)

const [,[,number]] = [22, [12, 24, 36]];
console.log(number)