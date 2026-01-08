/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos=[];
  }
  add(task){
    this.todos.push(task);
    return this.todos;
  }
  remove(index){
    if(index>=0 && index<this.todos.length){
      this.todos.splice(index,1);
    }
    return this.todos;
  }
  update(index,newvalue){
    if(index>=0 && index<this.todos.length){
      this.todos[index]=newvalue;
    }
    return this.todos;
  }
  getAll(){
    return this.todos;
  }
  getindexoftodos(task){
    return this.todos.indexOf(task);
  }
  clear(){
    this.todos=[];
    return this.todos;
  }
}

const  todoList=new Todo();
todoList.add("Buy groceries");
todoList.add("Do laundry");
todoList.add("Walk the dog");
console.log(todoList.getAll());
todoList.remove(1);
console.log(todoList.getAll());
todoList.update(0,"Buy groceries and snacks");
console.log(todoList.getAll());
console.log(todoList.getindexoftodos("Walk the dog"));
todoList.clear();
console.log(todoList.getAll());
module.exports = Todo;
