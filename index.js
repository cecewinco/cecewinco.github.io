
let imageEl =document.querySelector("#image-el")

imageEl.onclick = ()=> {
  let mySrc = imageEl.getAttribute("src")
  if(mySrc === "images/firefox-icon.png") {
    imageEl.setAttribute("src", "images/firefox2.png")
  } else {
    imageEl.setAttribute("src", "images/firefox-icon.png")
  }
  
}




let head1El = document.getElementById("head1-el")
let changeBtn = document.querySelector("#change-btn")

  
function setUserName() {
  const myName = prompt("Please enter your name: ")
  if(!myName){
    setUserName()
  } else {
  localStorage.setItem("name", myName)
  head1El.textContent = "Mozilla is cool, " + myName
  }
}

if(!localStorage.getItem("name")){
  setUserName()
} else {
  let storedName = localStorage.getItem("name")
  head1El.textContent = "Mozilla is cool, " + storedName
}

changeBtn.onclick = () =>{
  setUserName()
}
