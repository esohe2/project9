 const emailText = document.querySelector(".email-field");
 var emailError = document.getElementById("email-error")


document.getElementById("hello").addEventListener("click", function(event){
    event.preventDefault()
    const result = emailText.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
    if(result){
                 console.log(true)
                 emailText.style.color = "";
                 emailText.style.borderColor = ""
                 window.location.assign("indexx9.html")
                 }
                 else{
                    console.log("rubbiah hPPWEE");
                     emailText.style.color = "red";
                     emailText.style.borderColor = "red";
                     emailError.style.color = "red";
                     emailError.style.borderColor = "red";
                     emailError.innerHTML = 'Valid email required'
                     }
                     
                     });
                     
                     
                     
                     












