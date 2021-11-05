
/* 
  - querySelector
  - querySelectorAll
*/

const firstLi = document.querySelector("li.item");
console.log(`firstLi`, firstLi)

const allLi = document.querySelectorAll('.item');
console.log(`allLi`, allLi)

allLi.forEach(function (item) {
  console.log(item);
})