let ul_container = document.getElementById('ul-container'); 





addEventListener('keydown', (event)=> {
    if(event.keyCode==13) {
        addlistitem();
    }
}) ;









ul_container.addEventListener('click' , (event)=> {
        if(event.target.tagName == 'LI') {
            event.target.classList.toggle('checked-items')
        }
        if(event.target.tagName == "LABEL") {
            event.target.parentNode.parentNode.parentNode.classList.toggle('checked-items');
        }
        if(event.target.tagName == "IMG") event.target.parentNode.parentNode.parentNode.remove();
       
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
    

    input.value = '' ;
    

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
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');
    let spanCross = document.createElement('span');
    let img = document.createElement('img');
    img.src='images/icon-cross.svg' ;
    

    prioritydiv.setAttribute('class' , 'priority-btns') ;
    selecttag.setAttribute('id' , 'task-priority') ;
    selecttag.setAttribute('class' , 'priority') ;
    selecttag.setAttribute('onchange', 'myFunction()');

    option1.setAttribute('value' , '1');
    option2.setAttribute('value' , '2');
    option3.setAttribute('value' , '3');

    option1.innerText = "A task" ;
    option2.innerText = "B task" ;
    option3.innerText = "C task" ;

    spanCross.setAttribute('class' , 'cross') ;

    spanCross.appendChild(img);

    selecttag.append(option1 , option2 , option3);

    prioritydiv.appendChild(selecttag)

    prioritydiv.appendChild(spanCross);



    

    return prioritydiv ;
}


myFunction() {
    let select = document.querySelectorAll('#task') 
}







/* let priority_task = document.getElementById('task-priority'); */
