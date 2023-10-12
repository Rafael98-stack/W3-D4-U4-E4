


    const buttonExtractionContainer = document.getElementById("buttonExtraxtContainer")
    buttonExtractionContainer.onclick = function (e) {
        const tabellaContainer = document.getElementById("tabellaContainer");
        for (let i=0; i<77; i++) {
            const cellaContainer = document.createElement("div")
            cellaContainer.classList.add("cellaContainer")
            const number = document.createElement("h2")
            cellaContainer.classList.add("bingoNumber")
           
            
            
            cellaContainer.appendChild(number).innerText = i

            tabellaContainer.appendChild(cellaContainer)
            
    }
       
    }
    


window.addEventListener("DOMContentLoaded", () => {
  
    buttonExtractionContainer()
    }
    );