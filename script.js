const list = document.querySelector("ul");
const add_btn = document.getElementById("add-btn");
const input = document.getElementById("input");

add_btn.addEventListener("click", () => {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    let taskText = document.createElement("span");
    taskText.className = "textbox"
    taskText.textContent = input.value;

    let delbox = document.createElement("button");
    delbox.className = "delbox";
    delbox.textContent = "🗑";

    delbox.addEventListener("click", () => {
        li.remove();
    });

    if (input.value !== "")
    {
        li.append(checkbox, taskText, delbox);
        list.append(li);
        input.value = "";
    }
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter")
    {
        add_btn.click();
    }
});