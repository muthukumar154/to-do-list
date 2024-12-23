var input=document.getElementById("text")
var button=document.getElementById("btn")
var todolist=document.querySelector(".todo")
var todos=[]
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem("todos")) ||[]
    todos.forEach(todo=>add(todo))
    console.log(todos)
}
button.addEventListener("click",function()
{
    todos.push(input.value)
    localStorage.setItem("todos",JSON.stringify(todos))
    add(input.value)
    input.value=""
})
function add(todo)
{
    var para=document.createElement("p")
    para.innerHTML=todo
    todolist.append(para)
para.addEventListener("click",function()
    {
        para.style.textDecoration="line-through"
        remove(todo)
        
    })
para.addEventListener("dblclick",function()
    {
        todolist.removeChild(para)
        remove(todo)
    })
}
function remove(todo)
{
    var index=todos.indexOf(todo)
    if(index>-1)
        todos.splice(index,1)
        localStorage.setItem("todos",JSON.stringify(todos))
}
