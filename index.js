let ul_container = document.getElementById('ul-container'); 
let newli = document.createElement('li');

addEventListener('keydown', (event)=> {
        if(event.keyCode===13) {
            newlistitem();
        }
}) ;

function newlistitem() {
    
    
    newli.classList.add('listItems');
    let maindiv = newouterdiv();
    newli.appendChild(maindiv);
    

    console.log(maindiv);

    ul_container.append(newli) ;
    console.log(newli);

}



const newouterdiv = ()=> {
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


    
