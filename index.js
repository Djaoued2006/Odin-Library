class Book {
    constructor(title, author, numberPages, read) {
        this.title = title;
        this.author = author;
        this.numberPages = numberPages;
        this.read = read;
        return this;
    }

    setItem() {
        const div = document.createElement("div");
        div.classList.add("card");

        let pars = [];
        let buttons = [];
        let i;

        for (i = 0; i < 3; i++) {
            const p = document.createElement("p");
            pars.push(p);
        }

        for (i = 0; i < 3; i++) {
            if (i == 0) {
                pars[i].innerText = `"${this[elements[i]]}"`;
            } else {
                pars[i].innerText = this[elements[i]];
            }
            pars[i].classList.add("book-" + elements[i]);
            div.appendChild(pars[i]);
        }

        for (i = 0; i < 2; i++) {
            const button = document.createElement("button");
            button.classList.add("button");
            buttons.push(button);
        }

        const read = this.read ? "Already Read" : "Not Read";

        buttons[0].innerText = read;
        buttons[0].classList.add("readButton");
        buttons[0].style.backgroundColor = this.read ? readColor : notReadColor;
        changeReadState(buttons[0]);

        buttons[1].innerText = "Remove";
        buttons[1].classList.add("remove-book");
        removeBook(buttons[1]);
        for (i = 0; i < 2; i++) {
            div.appendChild(buttons[i]);
        }
        return div;
    }

    addBook() {
        wrapper.appendChild(this.setItem());
        return;
    }
}

const info = {
    title: document.querySelector(".title"),
    author: document.querySelector(".author"),
    number: document.querySelector(".number"),
    read: document.querySelector(".read-checkbox"),
};
const elements = ["title", "author", "numberPages"];
const addBookButton = document.querySelector(".add-book");
const form = document.querySelector(".form");
const wrapper = document.querySelector(".wrapper");
const submitButton = document.querySelector(".submit-button");
const removeFormButton = document.querySelector(".remove-form");
const notReadColor = "rgb(131, 47, 68)";
const readColor = "rgb(89 , 255 , 72)";

function removeForm() {
    Object.keys(info).forEach((key) => {
        info[key].value = "";
    });
    info.read.value = false;
    form.setAttribute("id", "non-display");
    return;
}

addBookButton.addEventListener("click", () => {
    form.removeAttribute("id");
});

removeFormButton.addEventListener("click", () => {
    removeForm();
});

submitButton.addEventListener("click", () => {
    const book = new Book(
        info.title.value,
        info.author.value,
        info.number.value,
        info.read.checked
    );
    book.addBook();
    removeForm();
});

function removeBook(btn) {
    btn.addEventListener("click", () => {
        const parent = btn.parentNode;
        wrapper.removeChild(parent);
    });
}

function changeReadState(btn) {
    btn.addEventListener("click", () => {
        if (btn.style.backgroundColor == notReadColor) {
            btn.innerText = "Already Read";
            btn.style.backgroundColor = readColor;
        } else {
            btn.innerText = "Not Read";
            btn.style.backgroundColor = notReadColor;
        }
    });
}
