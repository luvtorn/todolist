
const inputBtn = document.querySelector(".input-btn");
const inputText = document.querySelector(".input-text");
const main = document.querySelector(".main")


const submitRemove = document.querySelector(".submit_remove")
const removeWindow = document.querySelector(".remove")
const removeConfirm = document.querySelector(".remove-confirm")
const removeCancel = document.querySelector(".remove-cancel")
const todoBackground = document.querySelector(".bg")

inputText.focus()

document.addEventListener("keydown", (event) => {
  if(event.key === "Enter") {
    inputBtn.click()
  }
})

const changeLight = document.querySelector(".light-button")
const changeDark = document.querySelector(".dark-button")


inputBtn.addEventListener("click",  function () {
  const ol = document.body.querySelector("ol");

  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.className = "checkInput";

  // todos = await JSON.parse(localStorage.getItem("todos") ?? "[]")
  // console.log(todos)

  // todos.push(inputText.value)
  // console.log(todos)

  // localStorage.setItem("todos", JSON.stringify())

  const errorLabel = document.querySelector(".error_label")

  if(inputText.value == "") {
    errorLabel.classList.remove("hide")
  } else {
    errorLabel.classList.add("hide")
    const li = document.createElement("li");
    li.classList.add("li-show");

    const p = document.createElement("p");

    const remove = document.createElement("button");
    remove.innerHTML = "Delete"
    remove.className = "remove-btn dark"

    p.textContent = inputText.value;
    li.appendChild(check);
    li.appendChild(p);
    li.appendChild(remove);
    ol.appendChild(li);

    check.addEventListener("click", function () {
      if (check.checked) {
        p.style.textDecoration = "line-through"
      } else {
        p.style.textDecoration = "none"
      }
    });

    remove.addEventListener("click", () => {

      removeWindow.classList.remove("hide")
      todoBackground.style.filter = "blur(5px)"

      removeConfirm.addEventListener("click", () => {
        removeWindow.classList.add("hide")
        todoBackground.style.filter = "blur(0)"
        li.style.display = "none"
      })

      removeCancel.addEventListener("click", () => {
        removeWindow.classList.add("hide")
        todoBackground.style.filter = "blur(0)"
      })
    })
    

    inputText.value = "";
  // const todos = [
  //   {
  //     text: "kupic kygyftyddh",
  //     isCompleted: false,
  //     id: {
  //       {
  //         .ksdmb;ljksd;lbn:\Xdbmsd;lbkmwlkbm
  //       }
  //     }
  //   }
  // ]
  changeLight.addEventListener("click", () => {
    main.classList.remove("light")
    main.classList.add("dark")
    submitRemove.classList.remove("light")
    submitRemove.classList.add("dark")
    changeLight.classList.add("hide")
    inputText.classList.remove("light")
    inputText.classList.add("dark")
    changeDark.classList.remove("hide")
    removeConfirm.classList.remove("dark")
    removeConfirm.classList.add("light")
    removeCancel.classList.remove("dark")
    removeCancel.classList.add("light")
    remove.classList.remove("dark")
    remove.classList.add("light")
    inputBtn.classList.remove("dark")
    inputBtn.classList.add("light")
  })
  
  changeDark.addEventListener("click", () => {
    main.classList.remove("dark")
    main.classList.add("light")
    submitRemove.classList.remove("dark")
    submitRemove.classList.add("light")
    inputText.classList.remove("dark")
    inputText.classList.add("light")
    changeDark.classList.add("hide")
    changeLight.classList.remove("hide")
    removeConfirm.classList.remove("light")
    removeConfirm.classList.add("dark")
    removeCancel.classList.remove("light")
    removeCancel.classList.add("dark")
    remove.classList.remove("light")
    remove.classList.add("dark")
    inputBtn.classList.remove("light")
    inputBtn.classList.add("dark")
  })
  }
});

