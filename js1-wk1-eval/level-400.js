let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
const secretLength = secret.length;
confession = confession.replaceAll(secret,'x'.repeat(secretLength));

console.log(confession);
// a) How many function calls are there in this file?
// There are two function calls in this file: `replaceAll` and `repeat`.

// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
// 
// c) How many inputs do we pass to replaceAll when we call it? How can you tell?
// d) How any inputs do we pass to repeat when we call it?  How can you tell?
// e) What kind of statement is on line 7?