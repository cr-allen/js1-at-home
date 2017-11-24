var todo = [];
for (let i; i <= 3; i++){
  let todo = [];
  var userTodo = prompt('what do you need to do this weekend','take many naps');
  var dueDate = prompt('how many days should each thing take', '1')
  dueDate = parseInt(dueDate)
  if(dueDate == NaN){
    alert('please use numbers (eg, 1 instead of one or dates)')
  } else {
    todo.push(userTodo, deuDate)
  }
  todo.push(userTodo);
  if (todo.length == 3) {
    break; //<-- cleanest way to stop the loop
  }
  else {
    continue;
  }
}
let v = 0;
while (v <= 2) {
  if (todo[v][1] < todo[v - 1][1]) {

  }
  math.max(todo[v][1])
}
