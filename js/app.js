 
// select the items 
const toDoList = document.querySelector('#todo-list ul');
const addlist  = document.querySelector('#add-list') ;
const inputValue =addlist.querySelector('input[type="text"]').value;
const hidelist   = document.querySelector('#hide');
const searchBar = document.forms['search-Todo'].querySelector('input');

// remove toDo list 

//Array.from(toDoList).forEach( remove =>{})
toDoList.addEventListener('click' , e=> {
    if(e.target.className == 'delete'){
        if(confirm("did you finished this task?!")){
            const removeItems = e.target.parentElement;
            toDoList.removeChild(removeItems);
         }
    }
 }) 
//add new element 
addlist.addEventListener('submit', e => {
    e.preventDefault(); 
    // creat list 
    const li        = document.createElement('li');
    const namelist  = document.createElement('span');
    const deleteBtn = document.createElement('span');
    // appand the items to the DOM
        li.appendChild(namelist);
        li.appendChild(deleteBtn) ;
        toDoList.appendChild(li);
     // add content 
     namelist.textContent = inputValue ;
     deleteBtn.textContent = 'delete' ;
     // add class 
     namelist.classList.add('name');
     deleteBtn.classList.add('delete');
     addlist.reset();
     //check box hide all items 
    hidelist.addEventListener('change', e => {
       if(hidelist.checked) {
        toDoList.style.display = 'none';
       }
       else {
        toDoList.style.display = "initial";
       }
    })
});
 // 
 searchBar.addEventListener( 'keyup', (e) => {
    //const term = e.target.value.toLowerCase();
    const  search =  toDoList.getElementsByTagName('li');
    Array.from(search).forEach((list) => {
      const title = list.firstElementChild.textContent;
               // in case the items is founded 
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        list.style.display = 'block';
      } else {
        list.style.display = 'none';
      }
    });
})

