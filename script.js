const submittbtn = document.getElementById("submitBtn");

submittbtn.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent form submission
    const dateInput = document.getElementById("date").value;
    const typeSelect = document.querySelector("#select").value;
    let openingToken = 58784;
    let closingToken = 59599;
    
     const currentDate = new Date()
     const selectedDate = new Date(dateInput)
     const diff = currentDate - selectedDate
     const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24))

     if(diffDays < 0){
         document.getElementById("date").style.backgroundColor = "red";
        setTimeout(() => {
              document.getElementById("date").style.backgroundColor = "white";
        }, 2000);
    
        return
     }
        if(typeSelect === "open" && diffDays === 1){
            openingToken -= 1
            console.log(openingToken);
               
        }
        if(typeSelect === "close" && diffDays === 1){
            closingToken -= 1 
            console.log(closingToken);   
        }
        console.log(openingToken);
        
        
     console.log(diffDays)
        
  

    
   
});