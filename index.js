let ul_container = document.getElementById('ul-container'); 
let switch_img = document.getElementById('switch-img') ;
let body = document.getElementById('body');
let display_count = document.querySelector('#items-count');
let all_option = document.querySelector('.all-option');
let active_option = document.querySelector('.active-option');
let completed_option = document.getElementById('completed-option');
let options = document.querySelector(".middle-options");
all_option.classList.add('active-option');
active_option.classList.remove('active-option')
completed_option.classList.remove('active-option')



addEventListener('keydown', (event)=> {
    if(event.keyCode==13) {
        addlistitem();
    }
}) ;












ul_container.addEventListener('click' , (event)=> {
   
   
        if(event.target.tagName === 'LI') {
            event.target.classList.toggle('checked-items');
        }
        if(event.target.tagName === "LABEL") {
            event.target.parentNode.parentNode.parentNode.classList.toggle('checked-items');
           
            
        }
        if(event.target.tagName === "IMG") event.target.parentNode.parentNode.parentNode.remove();
        

        
    count_items();
    savedata();
});




function addlistitem() {
    let newli = document.createElement('li'); 
   const checkbox = document.getElementById('checkbox');
    let input = document.getElementById('input-box') ;
    
    let newdiv = newtaskdiv();
    let prioritydiv = newprioritydiv() ;
    newli.classList.add('listItems');
    newli.appendChild(newdiv);
    newli.appendChild(prioritydiv);
    


    ul_container.append(newli) ;
    

    input.value = "" ;
    
    let select= document.querySelectorAll('#task-priority');
     

    select.forEach(item => {
        item.addEventListener('change', (e)=> {
            myfunction(e.target);
       
        });
        
    }) ;

    count_items() ;
    savedata();
   
}


const newtaskdiv = () => {
    let outerdiv = document.createElement('div');
    outerdiv.classList.add('outer-div') ;
    const inputvalue = document.getElementById('input-box').value ;
    let maindiv = document.createElement('div');
    let newlabel = document.createElement('label') ;
    maindiv.classList.add('main-task-div')
    newlabel.innerText = inputvalue ;
    maindiv.appendChild(newlabel);
    outerdiv.appendChild(maindiv);
    return outerdiv ;
}

const newprioritydiv = ()=> {
    let prioritydiv = document.createElement('div');
    let selecttag = document.createElement('select') ;
    let option_select = document.createElement('option');
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');
    let spanCross = document.createElement('span');
    let img = document.createElement('img');
    img.src='images/icon-cross.svg' ;
    

    prioritydiv.setAttribute('class' , 'priority-btns') ;
    selecttag.setAttribute('id' , 'task-priority') ;
    selecttag.setAttribute('class' , 'priority') ;
    /* selecttag.setAttribute('onchange', 'myFunction()'); */


    option_select.setAttribute('disabled', 'true') ;
    option_select.setAttribute('selected' , 'true') ;
    option_select.setAttribute('hidden' , 'true') ;

    option1.setAttribute('value' , '1');
    option2.setAttribute('value' , '2');
    option3.setAttribute('value' , '3');

    option_select.innerText = 'Select';
    option1.innerText = "A task" ;
    option2.innerText = "B task" ;
    option3.innerText = "C task" ;

    spanCross.setAttribute('class' , 'cross') ;

    spanCross.appendChild(img);

    selecttag.append(option_select , option1 , option2 , option3);

    prioritydiv.appendChild(selecttag)

    prioritydiv.appendChild(spanCross);

    console.log(option_select);


    

    return prioritydiv ;
}





function swapimg() {
    let img = document.getElementById('sun-img');
    let inputdiv = document.getElementById('input-box-div');
    let inputbox = document.getElementById('input-box');
    let taskdiv = document.getElementById('tasks');
    if(img.src.match('images/icon-sun.svg')){
        img.src = 'images/icon-moon.svg';
        body.classList.add('dm-body');
        inputdiv.classList.add('input-box-dm');
        inputbox.classList.add('input-dm');
        taskdiv.classList.add('dm-tasks');
        options.classList.add('dm-middle-options')
        
    }
    else{
        img.src = 'images/icon-sun.svg';
        body.classList.remove('dm-body');
        inputdiv.classList.remove('input-box-dm');
        inputbox.classList.remove('input-dm');
        taskdiv.classList.remove('dm-tasks');
        options.classList.remove('dm-middle-options')
        
    }
}


const count_items  = () => {
    
    let NotChecked = ul_container.querySelectorAll('li:not(.checked-items)');
    display_count.innerText =NotChecked.length;
   savecount();
}

function savecount() {
    
    localStorage.setItem('count' ,display_count.innerText);
}

function displaycount() {
    console.log(display_count.innerText);
    display_count.innerText = localStorage.getItem('count') ;
}

displaycount();


function savedata() {
    
    localStorage.setItem( 'data' , ul_container.innerHTML);
}

function displaydata() {
    ul_container.innerHTML = localStorage.getItem('data');
}




displaydata();


function myfunction(x) {
   let  option_collection = x ;
   
   let option_value = option_collection.options[x.selectedIndex].value;
   
   
            if(option_value==1) {
                option_collection.parentNode.parentNode.classList.add('priority-a');
                option_collection.parentNode.parentNode.classList.remove('priority-b');
                option_collection.parentNode.parentNode.classList.remove('priority-c');
            }
            else if(option_value==2) {
                option_collection.parentNode.parentNode.classList.add('priority-b');
                option_collection.parentNode.parentNode.classList.remove('priority-a');
                option_collection.parentNode.parentNode.classList.remove('priority-c');
            }
            else if(option_value==3) {
                option_collection.parentNode.parentNode.classList.add('priority-c');
                option_collection.parentNode.parentNode.classList.remove('priority-a');
                option_collection.parentNode.parentNode.classList.remove('priority-b');
            } 

          
}


function clearcomp() {
    let completedItems = document.querySelectorAll('li.checked-items');
    completedItems.forEach(element=>{
        element.remove();
    });
    savedata();
}

function display_all() {
    all_option.classList.add('active-option');
    active_option.classList.remove('active-option');
    completed_option.classList.remove('active-option');
    let allitems = document.querySelectorAll('.listItems');
    allitems.forEach(element => {
        element.style.display = 'flex';
    });
     
}

function display_active() {
    all_option.classList.remove('active-option');
    active_option.classList.add('active-option');
    completed_option.classList.remove('active-option');
    const items = document.querySelectorAll('.checked-items');
    let unchecked_items = document.querySelectorAll('.listItems:not(.checked-items)');
    items.forEach(element => {
        element.style.display='none';
    });
    unchecked_items.forEach(element=>{
        element.style.display = 'flex';
    })
}

function display_completed() {

    all_option.classList.remove('active-option')
    active_option.classList.remove('active-option')
    completed_option.classList.add('active-option')
    let Items = document.querySelectorAll('.listItems:not(.checked-items)');
    let checked_items = document.querySelectorAll(".checked-items");

    checked_items.forEach(element=> {
        element.style.display = 'flex';
    })
    
    Items.forEach(element=>{
        element.style.display = 'none';
    })
}