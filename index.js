let ul_container = document.getElementById('ul-container'); 
let switch_img = document.getElementById('switch-img') ;
let body = document.getElementById('body');
let select ;





addEventListener('keydown', (event)=> {
    if(event.keyCode==13) {
        addlistitem();
    }
}) ;




/* select.addEventListener( 'change' , (e)=>{
    console.log(e.target.options[e.target.selectedIndex].text);
}) */










ul_container.addEventListener('click' , (event)=> {
        if(event.target.tagName === 'LI') {
            event.target.classList.toggle('checked-items')
        }
        if(event.target.tagName === "LABEL") {
            event.target.parentNode.parentNode.parentNode.classList.toggle('checked-items');
        }
        if(event.target.tagName === "IMG") event.target.parentNode.parentNode.parentNode.remove();
       
});




function addlistitem() {
    let newli = document.createElement('li'); 
   
    let input = document.getElementById('input-box') ;
    
    let newdiv = newtaskdiv();
    let prioritydiv = newprioritydiv() ;
    newli.classList.add('listItems');
    newli.appendChild(newdiv);
    newli.appendChild(prioritydiv);
    


    ul_container.append(newli) ;
    

    input.value = "" ;
    selectelement = document.querySelectorAll('#task-priority');
    console.log(selectelement);
    selectelement.forEach(item => {
        item.addEventListener('change', (e)=> {
            option_collection = e.target ;
            option_value = option_collection.options[option_collection.selectedIndex].value ;

            if(option_value==1) {
                option_collection.parentNode.parentNode.classList.add
                ('priority-a');
            }
            if(option_value==2) {
                option_collection.parentNode.parentNode.classList.add('priority-b');
            }
            if(option_value==3) {
                option_collection.parentNode.parentNode.classList.add('priority-c');
            }
        });
    }) ;
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


    option_select.disabled ;
    option_select.selected ;
    option_select.hidden ;

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


function getSelectOptions() {
    let select =[...document.querySelectorAll('#task-priority')] ;
    
    return select ;
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
    }
    else{
        img.src = 'images/icon-sun.svg';
        body.classList.remove('dm-body');
        inputdiv.classList.remove('input-box-dm');
        inputbox.classList.remove('input-dm');
        taskdiv.classList.remove('dm-tasks');
    }
}








/* let priority_task = document.getElementById('task-priority'); */
