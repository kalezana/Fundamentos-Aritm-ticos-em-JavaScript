num = Array(6);
num[0] = gets();
num[1] = gets();
num[2] = gets();
num[3] = gets();
num[4] = gets();
num[5] = gets();
posit = num.filter(value => value > 0);
console.log(posit.length + " valores positivos");
