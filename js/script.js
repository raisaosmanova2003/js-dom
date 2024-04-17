

const myInput=document.querySelector('input')
const addBtn=document.querySelector('.btn')
const todoListContain=document.querySelector('ul')

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
   const myDiv=document.createElement("div")
    
    myDiv.classList.add ("todo-items")
    console.log(myDiv);

    const outlineBtn=document.createElement("button")
    outlineBtn.classList.add("outline")
    outlineBtn.innerHTML= '<i class="fa-solid fa-check" style="color: #74C0FC;"></i>'
    myDiv.appendChild(outlineBtn)

    const myLi=document.createElement("li")
    myLi.classList.add("todo")
    myLi.innerHTML=myInput.value
    myDiv.appendChild(myLi)
    console.log(myLi);

   const trashBtn=document.createElement("button")
   trashBtn.classList.add("trash")
   trashBtn.innerHTML='<i class="fa-solid fa-trash-can"></i>'
   myDiv.appendChild(trashBtn)
   console.log(trashBtn);
    todoListContain.appendChild(myDiv)

    myInput.value=' '

})