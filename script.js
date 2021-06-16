let myButton = document.querySelector('button');
let parentOl = document.querySelector('ol');

 myButton.addEventListener('click', getValue)

function getValue() {
  let input = document.querySelector('input')
  let str = input.value;
      if (str) {
        input.value = '';
        appendValue(str);
      } 


}

function appendValue(str) {
  let li = document.createElement('li')
   li.innerText = str;
   parentOl.appendChild(li)

} 
