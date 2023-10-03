let todo= document.getElementById('todo-input');
let list = document.getElementById('list');
console.dir(list);
let button = document.getElementById('button');
button.addEventListener('click', function(){
   if(todo.value){
      list.innerHTML += `<li>${todo.value}</li>`;
      todo.value ='';
   }
   else{
      alert('no input');
   }
});