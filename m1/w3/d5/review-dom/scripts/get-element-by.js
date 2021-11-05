
/* 
  - getElementById
  - getElementsByClassName
  - getElementsByTagName
*/

const wrapper = document.getElementById("to-do-wrapper");
console.log(`wrapper`, wrapper)

const items = document.getElementsByClassName("item");
console.log(`items`, items);

// Converting HTMLCollection to an array - way 1
const itemsArr1 = [...items];
console.log(`itemsArr1`, itemsArr1)

itemsArr1.forEach((item) => {
  console.log(item)
})

// Converting HTMLCollection to an array - way 2
const itemsArr2 = Array.from(items);

itemsArr2.forEach((item) => {
  console.log(item)
})


const allLi = document.getElementsByTagName('li');
console.log(`allLi`, allLi)


