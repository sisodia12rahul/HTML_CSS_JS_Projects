let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click", function (){
    let inpVal = inp.value;
    let newLi = document.createElement('li');
    newLi.innerText = inp.value;
    inp.value = "";
    ul.append(newLi);

    let dlt = document.createElement("button");
dlt.classList.add("delete");
dlt.innerText = "Delete";

    newLi.append(dlt);

    
dlt.addEventListener("click", function(){
    this.parentElement.remove();
});
});


document.addEventListener("keydown",function(event){
    if(event.code == "Enter" || event.code == "NumpadEnter"){
        let inpVal = inp.value;
        let newLi = document.createElement('li');
        newLi.innerText = inp.value;
        inp.value = "";
        ul.append(newLi);
    
        let dlt = document.createElement("button");
    dlt.classList.add("delete");
    dlt.innerText = "Delete";
    
        newLi.append(dlt);
    
        
    dlt.addEventListener("click", function(){
        this.parentElement.remove();
    });
    };
});