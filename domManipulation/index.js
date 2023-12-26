function SubmitForm() {
    document.querySelector("#unH2").innerHTML = document.querySelector("#username").value
    document.querySelector("#plh2").innerHTML= document.querySelector("#language").value
        

        document.querySelector(".row2").style.backgroundColor = document.querySelector("#FavColor").value;
}

function RemoveAD(el) {
  
    el.remove()
}

function RemoveAdByButton(elId) {
    document.querySelector(elId).remove()
    
}

function RemoveAllAds(elemntsTagName) {

  var listOfElements  = document.querySelectorAll(elemntsTagName)
  for (let index = 0; index < listOfElements.length; index++) {
    const element = listOfElements[index];
    element.remove()
    
  }
    
}

function darkMode(elId,myButton) {
    // if (document.querySelector(elId).classList.contains('dark-mode')) {
    //     document.querySelector(elId).classList.remove('dark-mode')
        
    // }else{
    //     document.querySelector(elId).classList.add('dark-mode')
    // }
    if (myButton.innerHTML === 'Dark mode ON') {

        document.querySelector(elId).classList.add('dark-mode')
        myButton.innerHTML = 'Dark mode OFF'
    }else{
        document.querySelector(elId).classList.remove('dark-mode')
        myButton.innerHTML = 'Dark mode ON'
    }


    
    
}