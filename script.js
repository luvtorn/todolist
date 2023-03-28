AOS.init();
const inputBtn = document.querySelector(".input-btn");
const inputText = document.querySelector(".input-text");

inputText.focus()

document.addEventListener("keydown", (event) => {
  if(event.key === "Enter") {
    inputBtn.click()
  }
})


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
    // li.classList.add("li-show");
    li.setAttribute("data-aos", "fade-right")

    const p = document.createElement("p");

    const remove = document.createElement("button");
    remove.innerHTML = "Delete"
    remove.className = "remove-btn"

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
      const submitRemove = document.querySelector(".submit_remove")
      const removeConfirm = document.querySelector(".remove-confirm")
      const removeCancel = document.querySelector(".remove-cancel")
      const todoBackground = document.querySelector(".bg")

      submitRemove.classList.remove("hide")
      todoBackground.style.filter = "blur(5px)"

      removeConfirm.addEventListener("click", () => {
        submitRemove.classList.add("hide")
        todoBackground.style.filter = "blur(0)"
        li.style.display = "none"
      })

      removeCancel.addEventListener("click", () => {
        submitRemove.classList.add("hide")
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
  }
});