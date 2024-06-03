console.log(this); // !global {}
console.log(this === module.exports); // true

function a() {
  console.log(this); // global
  console.log(this === global); // true
}

a();
