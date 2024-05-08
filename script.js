let task = document.getElementById("toDo");
let add = document.getElementById("add");
let added = document.getElementById("added");



add.addEventListener("click",function (){
    console.log("Reached!")
    // apending an Element at first
    let nw = document.createElement("li");
    // nw.textContent = task.value;
    added.insertBefore(nw,added.firstElementChild);

    let del = document.createElement("button");
    del.textContent = "Delete";

    let inp = document.createElement("input");
    inp.placeholder = task.value;

    let edi = document.createElement("button");
    edi.textContent = "Edit"

    inp.setAttribute("pointer-events","none");

    nw.appendChild(inp);
    nw.appendChild(edi);
    nw.appendChild(del);

    del.addEventListener("click",function(){
        added.removeChild(nw);
    })

    edi.addEventListener("click", function(){
        inp.setAttribute("pointer-events","auto");
        edi.textContent = "Save";
        edi.addEventListener("click",function (){
            edi.textContent = "Edit";
            inp.placeholder = inp.value;
        })
    })







})