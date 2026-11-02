document.getElementById("form").addEventListener("submit",function(event){
   
   event.preventDefault();
    let expenvalue= document.getElementById("Expence").value ;

    if(expenvalue>0){
        document.getElementById("display").innerHTML =
            "Expense Added Successfully!"
        
    }
    else{
        document.getElementById("display").innerHTML =
            "Please enter a valid amount."
        
    }

    localStorage.setItem("expense",expenvalue)

    console.log(expenvalue)
})


document.getElementById("show").addEventListener("submit",function(event){
   
   event.preventDefault();
    console.log("hai")
    let expenseshow = localStorage.getItem("expense")
    document.getElementById("displayshow").innerHTML = expenseshow
})

document.getElementById("remove").addEventListener("submit",function(event){
    event.preventDefault();
    localStorage.removeItem("expense")
    
    console.log("removed ")

    console.log(localStorage.getItem("expense"))
})