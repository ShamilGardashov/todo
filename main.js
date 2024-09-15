
// Создание элементов div
let box = document.createElement("div");
box.classList.add("wrapper")

let mainBox = document.createElement("div")
mainBox.classList.add("mainBox")

let listBox = document.createElement("div")
listBox.classList.add("listBox")

// Добавление заголовка и параграфа
let title = document.createElement("h1")
title.textContent = "Список космических дел"
title.classList.add("title")

let title2 = document.createElement("p")
title2.textContent = "чем займемся сегодня?"
title2.classList.add("title2")
// Добавление списка
let list = document.createElement("ul")
list.classList.add("list")
let span = document.createElement("span")
let itemList = document.createElement("li")



// ночная и дневная тема
let night = document.createElement("button")
night.textContent = "Ночная тема"

night.onclick = function() {
  if(box.classList.contains("night_tem")==true) {
    night.textContent = "Ночная тема"
    box.classList.remove("night_tem")

  }else {
    night.textContent = "Дневная тема"
  
    box.classList.add("night_tem")
  }
  
  
  
  }


// Поле ввода
let textInpBox = document.createElement("div")
let textInpEror = document.createElement("label")
textInpBox.classList.add("textInpBox")

let textInp = document.createElement("input")

textInp.placeholder = "пиши сюда"
// Кнопка добавить
let addBtn = document.createElement("button")
addBtn.textContent = "Добавить"

// функция добавления новых задач
addBtn.onclick = function() {
  let list = document.createElement("ul")
  list.classList.add("list")
  let span = document.createElement("span")
  span.textContent = textInp.value
  let itemList = document.createElement("li")

  //Проверка на ошибки

  if (textInp.value.length <= 1) {
    textInpEror.classList.add("error")
    textInpEror.textContent = "мало символов бро"
    return
  } else  {
   
    textInpEror.textContent = ""
    
  }
  
  // Кнопка "сделано"
  let createBtn = document.createElement("button")
  createBtn.textContent = "✔"
  createBtn.classList.add("createBtn")

  createBtn.onclick = function() {
    span.classList.add("create")
  }
  // Кнопка "удалить"
  let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "✖"
    deleteBtn.classList.add("deleteBtn")

    deleteBtn.onclick = function() {
      list.remove()
  }

  // Кнопка "изменить"
  let editBtn = document.createElement("button")
    editBtn.textContent = "✎"

  editBtn.onclick = function() {
      let name = prompt("Введи новую задачу")
      span.textContent = name
  // Проверка на ошибку при изменении      
      if (name.length <= 1) {
        alert("слишком мало символов")
        return editBtn.onclick()
      }

}
  textInp.value = ""
  listBox.append(list)
  list.append(itemList)
  itemList.append(span, createBtn, deleteBtn, editBtn)


}

// Добавление элементов на страницу
document.body.append(box)
textInpBox.append(textInp, textInpEror )
box.append(mainBox, listBox, night)
mainBox.append(title, title2, textInpBox, addBtn)
listBox.append(list)
list.append(itemList)
itemList.append(span)