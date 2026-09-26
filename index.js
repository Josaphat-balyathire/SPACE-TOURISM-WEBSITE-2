
//  navigation script controller 

const nav = document.querySelector(".nav-list");
const toggleBtn = document.getElementById("nav-toggle");

toggleBtn.addEventListener("click", ()=> {
  const visibility = nav.getAttribute("data-josaphat");

  if (visibility === "false"){
    nav.setAttribute("data-josaphat", true)
    toggleBtn.setAttribute("aria-expanded", true)
  }
  else {
    nav.setAttribute("data-josaphat", false)
    toggleBtn.setAttribute("aria-expanded", false)
  }
  
})


////////////////////////////////////////////////////////////////////////
// style for changing the content based on users actions 

 const boutons = document.querySelectorAll("[role='tab']");


 for (let i =0; i < boutons.length; i++) {
    let bouton = boutons[i];
    
    bouton.addEventListener("click", (e)=> {
  
      let current = e.currentTarget;
       let contentIds = current.getAttribute("aria-controls").split(" ")
       let content = document.getElementById(contentIds[0]);
       let picture = document.getElementById(contentIds[1])
       let container = document.querySelectorAll(".content");
       let pictures = document.querySelectorAll(".picture");

       console.log("hello world")
       for (let j = 0; j < container.length && j < pictures.length; j++) {
        container[j].setAttribute("hidden", "")
        pictures[j].setAttribute("hidden", "");
  
       }

       for (let h = 0; h < boutons.length; h++) {
           boutons[h].setAttribute("aria-selected",false)
       }


       content.removeAttribute("hidden")
       picture.removeAttribute("hidden")
       current.setAttribute("aria-selected", true)
       

    })

  //  the second event listener for the keydown
  bouton.addEventListener("keydown",(e)=>{

     let current = e.currentTarget;

      let currentIndex = Array.from(boutons).indexOf(current);

      if (e.key === "ArrowRight"){
        
         currentIndex++

         
         
         if (currentIndex === boutons.length){
           currentIndex = 0;
         }

      }else if (e.key === "ArrowLeft"){
        currentIndex--

        if (currentIndex < 0){
          currentIndex = boutons.length - 1;
        }
        
      }
      boutons[currentIndex].focus()
 })

   
 }





