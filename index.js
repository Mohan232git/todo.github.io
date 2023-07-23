let container = document.getElementById("ul-container");

document.getElementById("input-box").addEventListener("keydown" , 
function(event){
    if(event.keyCode==13) {
        appendli();
     
    }
})



/* for addding checked items */

document.getElementById("ul-container").addEventListener("click",function(e){

    
    let div  = document.getElementsByClassName("task");
    /* let div  = document.getElementsByClassName("task");
    let list = document.getElementsByClassName("listItems");
    console.log(list);
    console.log(list); */
     if(e.target.tagName==='LI') {
        
        let lbl =  e.target ;
        lbl.classList.toggle("checked-items");
        itemsleft() ;
        savetask();        
    }
    else if(e.target.tagName==="SPAN") {
        e.target.parentNode.remove() ;

        itemsleft();
        savetask();
    }
})


/* dark-mode & light mode */

let img = document.getElementById("switch");
img.addEventListener("click",function(e){
            let images = e.target ;
            let imagesClass = images.classList ;
        

            if(imagesClass=="sun") {
                img.classList.remove("sun")
                img.classList.add("moon");
                img.style.backgroundImage ="url('images/icon-moon.svg')" ;
                let body = document.getElementById('body') ;
                let inputBox =document.getElementById("input-box-div");
                let inputField = document.getElementById("input-box");
                let tasksdiv = document.getElementById('tasks');
                body.classList.add("dm-body");
                inputBox.classList.add("input-box-dm");
                inputField.classList.add("input-dm");
                tasksdiv.classList.add("dm-tasks");

                savetask()
                
            }
            else {
                img.classList.remove("moon");
                img.classList.add("sun") ;
                img.style.backgroundImage = "url('images/icon-sun.svg')" ;
                    
                let body = document.getElementById('body') ;
                let inputBox =document.getElementById("input-box-div");
                let inputField = document.getElementById("input-box");
                let tasksdiv = document.getElementById('tasks');
                body.classList.remove("dm-body");
                inputBox.classList.remove("input-box-dm");
                inputField.classList.remove("input-dm");
                tasksdiv.classList.remove("dm-tasks");
                savetask()
            
            }
        
})


/* add list items in ul-container */

function appendli() {
    let input = document.getElementById("input-box") ;
   /*  let div =  document.createElement("div") ; */
    let span =document.createElement("span") ;
    /* let label = document.createElement("label"); */
    let li = document.createElement("li");
    let liList =document.getElementById("ul-container");
   /*  let span2 = document.createElement("span") ; */
    let count = 0 ;
    if(input.value==""){

        document.getElementById('input-box').placeholder = "Enter the task!"
        input.classList.add("invalid");
        
    }
    else{
    
    /* span.classList.add("check");
    div.append(span); */
  /*   label.innerText = input.value ;
    label.id = "list-items" ;
    div.appendChild(label);
    div.classList.add("task");
    li.appendChild(div);
    span2.setAttribute("id","cross");
    li.appendChild(span2);
    li.classList.add("listItems");
    li.setAttribute("draggable",true);
    liList.appendChild(li); */
    li.innerText = input.value;
    li.classList.add("listItems");
    li.setAttribute("draggable", true);
    span.setAttribute("id","cross");
    li.append(span);
    liList.append(li);
    liList.classList.add('task-container');
    if(liList==null) liList.classList.remove('task-container');
    /* savetask(liList); */
    input.value="" ;
    document.getElementById('input-box').classList.remove("invalid");
    document.getElementById('input-box').placeholder = "Create Todo-task.....";
    itemsleft();
    savetask();
    
    }
    
   



   /* drag and drop */

   let list = document.querySelectorAll(".listItems") ;
    let container = document.getElementById('ul-container') ;
    list.forEach(item=> {
        item.addEventListener("dragstart",()=>{
            item.classList.add("dragging");
        });
        item.addEventListener("dragend",()=> {
            item.classList.remove("dragging");
        
        });
    }) ;

    const sortlist = (e)=>{
        e.preventDefault() ;
        let draggingItem = container.querySelector(".dragging");
const siblings = [...container.querySelectorAll(".listItems:not(.dragging)")] ;

        
        
        let nextsibling =siblings.find(siblings=>{
            return e.clientY <=siblings.offsetTop + siblings.offsetHeight /2 ;
        });


        container.insertBefore(draggingItem ,nextsibling) ;
            
    }
    
    container.addEventListener("dragover",sortlist);
    container.addEventListener("dragenter",(e)=>e.preventDefault());
    

  
   
   
}



          /* item-counts */



function itemsleft() {
    let itemscount = document.getElementById("items-count");
    const totalunchecked =[...document.querySelectorAll('.listItems')] ;
    const totalchecked = [...document.querySelectorAll(".checked-items")];
    const unchecked = totalunchecked.length;
    const checked = totalchecked.length;
    itemscount.innerText = unchecked - checked ;
}


 
        /* clear completed */
function clearcomp(){
    
    let cleareditems = [...container.querySelectorAll(".checked-items")];
    cleareditems.forEach(item =>{
        container.removeChild(item) ;
    });
    savetask();
    
}



 


 function savetask(){
    localStorage.setItem("data",container.innerHTML);
    
} 


 function displaytask(){
    container.innerHTML = localStorage.getItem("data") ;
}


displaytask();













