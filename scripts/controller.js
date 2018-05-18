"use strict";

console.log("controller works");


function TodoController() {
const vm = this;

vm.deleteItem = (index) => {
  vm.list.splice(index, 1);
};

vm.addItem = (todo) => {
  console.log(todo.do);
  vm.list.push(todo.do);
  todo.do=[];
};

vm.changeClass = (todo,index) => {
  console.log(todo.list[index]);
  todo.list[index].completed = true; 
  // ng-class="{completed: {{ task.completed }}}">
  console.log(todo.list[index]);
};

vm.list = [
  {
    taskName: "Task1",
    completed: true
  },
  {
    taskName: "Task2",
    completed: false
  },
  {
    taskName: "Task3",
    completed: false
  },
  {
    taskName: "Task4",
    completed: true
  },
  {
    taskName: "Task5",
    completed: false
  }
];

}

angular
  .module("todoApp")
  .controller("TodoController", TodoController);