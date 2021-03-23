function returnForm() { 
    let collection =  
             document.forms.namedItem("username"); 
    let name = collection[0].value; 

    document.querySelector(".name").innerHTML = name; 

} 