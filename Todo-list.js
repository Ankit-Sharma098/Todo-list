let todoArray=[];

function getSchedule(){
   let schedule=document.querySelector('.Todo-name');
   let scheduleDate=document.querySelector('.Todo-date');
   let name=schedule.value;
   let date=scheduleDate.value;
   
   //insert the date and name in object
   todoArray.push({name:name,date:date});
   schedule.value='';
   scheduleDate.value='';

   renderTodoList();
}

function renderTodoList(){
   let listTodoHTML='';

   for(let i=0;i<todoArray.length;i++){
      let todo=todoArray[i];
      listTodoHTML +=` <div class="todo-row-2">
        <div>${todo.name}</div>
        <div>${todo.date}</div>
        <button class="delete-todo-button" onclick="deleteTodo(${i})">
          Delete
        </button>
      </div>`;
   }
   document.querySelector('.Todo-list-para').innerHTML=listTodoHTML;
}
function deleteTodo(index){
    todoArray.splice(index,1);
    renderTodoList();
}

function onkeydownTodo(event){
    const key=event.key;

    if(key==='Enter'){
        getSchedule();
    }
}
