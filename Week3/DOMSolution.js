<!DOCTYPE HTML>
<script>
  let GlobalID=1;
  function MarkAsDone(todoId){
    const parent=document.getElementById(todoId);
    parent.children[2].innerHTML="DONE!";
  }

  function createChild(title,description,id){
    const child=document.createElement("div");
    const firstDiv=document.createElement("div");
    firstDiv.innerHTML=title;
    const secondDiv=document.createElement("div");
    secondDiv.innerHTML=description;
    const button =document.createElement("button");
    button.innerHTML="Mark as DONE!";
    button.setAttribute("onclick",`MarkAsDone(${id})`);
    child.appendChild(firstDiv);
    child.appendChild(secondDiv);
    child.appendChild(button)
    child.setAttribute("id",id);
    return child;
  }

  function AddTodo(){
    const title=document.getElementById("title").value;
    const description=document.getElementById("description").value;
    const parent=document.getElementById("container");
    parent.appendChild(createChild(title,description,GlobalID++));
  }
</script>
<body>
  <input id="title" type="text" placeholder="enter todo" ></input> <br/><br/>
  <input id="description" type="text" placeholder=" Todo description"></input> <br/><br/>
  <button onclick="AddTodo()" >Add New TODO</button>

  <div id="container"></div>
  
</body>
</html>
