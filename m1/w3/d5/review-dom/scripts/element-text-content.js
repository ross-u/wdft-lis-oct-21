
const li = document.querySelector("li.item:nth-child(2)");

console.log(`li`, li)

console.log(li.innerText);
console.log(li.textContent);
console.log(li.innerHTML);

// li.textContent = '2ND';
// li.innerText = '2ND';
// li.innerHTML = '<div><h4>2ND</h4></div>';
innerHTML = '2ND';

const newDiv = document.createElement('div');
const newP = document.creatElement('p');

newDiv.appendChild(newP);
newP.innerText = "2ND";
li.appendChild(newDiv);


