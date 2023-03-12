const inputBtn = document.querySelector(".input-btn");
setTimeout(function () {
  document.body.classList.add("body_visible");
}, 200);
const inputText = document.querySelector(".input-text");

inputBtn.addEventListener("click", function () {
  const ol = document.body.querySelector("ol");

  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.className = "checkInput";

  const label = document.createElement("label");

  const li = document.createElement("li");
  li.classList.add("li-show");

  const p = document.createElement("p");

  const remove = document.createElement("button");
  remove.innerHTML = "Delete";
  remove.className = "remove-btn";

  p.textContent = inputText.value;
  li.appendChild(check);
  li.appendChild(label);
  li.appendChild(p);
  li.appendChild(remove);
  ol.appendChild(li);

  check.addEventListener("click", function () {
    if (check.checked == true) {
      li.style.backgroundColor = "rgb(0, 204, 0)";
    } else {
      li.style.backgroundColor = "white";
    }
  });

  remove.addEventListener("click", function () {
    li.classList.add("hidden");
    setTimeout(() => {
      li.style.display = "none";
    }, 500); // Время анимации в миллисекундах
  });
  inputText.value = "";
});
