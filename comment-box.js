const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// 댓글 삭제
const delItem = (event) => {
    const target = event.target.parentElement;
    target.remove();
};

// 댓글 수정
const modifyItem = (event) => {
    console.log(event.target.parentElement);
    const message = this.prompt("수정할 메세지를 입력하세요.", event.target.parentElement.firstElementChild.innerText);
    event.target.parentElement.firstElementChild.innerText = message;
};

// 댓글 추가
const addItem = (text) => {
    if (text !== "") {
        const li = document.createElement("li");
        const removeBtn = document.createElement("button");
        const modifyBtn = document.createElement("button");
        const span = document.createElement("span");

        span.innerText = text;
        modifyBtn.innerText = "Edit";
        removeBtn.innerText = "Del";

        modifyBtn.addEventListener("click", modifyItem);
        removeBtn.addEventListener("click", delItem);

        li.appendChild(span);
        li.appendChild(modifyBtn);
        li.appendChild(removeBtn);
        ul.appendChild(li);
    }
};

const handler = (event) => {
    event.preventDefault();
    addItem(input.value);
    input.value = "";
};

form.addEventListener("submit", handler);
