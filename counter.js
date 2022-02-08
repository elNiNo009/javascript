
// camelcase
let countEl= document.getElementById("count-el")
//document object model
//how you use js to modify website
//html document
// html douc,emt into js object
let saveEl= document.getElementById("save-el")
//document.getElementById("count-el") --> asking html document
console.log(countEl)
let counter=0;
let welcomeEl=document.getElementById("welcome-el")
let name="Sarthak"
let greeting ="welcome "
welcomeEl.innerText=greeting+name
//
function increment()
{
//  console.log("button clicked")

  counter++;
  countEl.innerText=counter //replying html document
}

function save()
{
  let countstr=counter + " - "
  saveEl.innerText+=countstr
  // console.log(counter)
}
//
