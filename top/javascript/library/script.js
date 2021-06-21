let myLibrary;
const DEFAULT_DATA = [
    { title: "The Lord of the Rings", author: "Tolkien", status: "Finished" },
    { title: "Alice in Wonderland", author: "Lewis Caroll", status: "Not yet" },
    { title: "Naruto", author: "Masashi Kishimoto", status: "Finished" },
  ];
const $title = document.querySelector('#title')
const $author = document.querySelector('#author')
const $pages = document.querySelector('#pages')
const $completed = document.querySelector('#completed')
const $tableBody = document.querySelector('#book-table-body')
const $form = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    render();
})
const $table = document
  .querySelector("table")
  .addEventListener("click", (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[1];
    if (e.target.innerHTML == "delete") {
      if (confirm(`are you sure you want to delete ${currentTarget.innerText}`))
        deleteBook(findBook(myLibrary, currentTarget.innerText));
    }
    if (e.target.classList.contains("status-button")) {
      changeStatus(findBook(myLibrary, currentTarget.innerText));
    }
    updateLocalStorage();
    render();
  });

class Book {
    constructor(title,author,pages,completed) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.completed = completed;
    }
}

function addBookToLibrary() {
    if ($title.value.length === 0 || $author.value.length === 0) {
        alert("Please, fill all the fields");
        return;
      }
    const newBook = new Book($title.value, $author.value, $pages.value, $completed.value);
    myLibrary.push(newBook);
    updateLocalStorage();
}

function findBook(myLibraryArray, title) {
  if (myLibraryArray.length === 0 || myLibraryArray === null) {
    return;
  }
  for (book of myLibraryArray)
    if (book.title === title) {
      return myLibraryArray.indexOf(book);
    }
}
function clearForm() {
  $title.value = "";
  $author.value = "";
}
function updateLocalStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  //myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
}
function checkLocalStorage() {
  if (localStorage.getItem("myLibrary")) {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  } else {
    myLibrary = DEFAULT_DATA;
  }
}

function render() {
    checkLocalStorage();
    $tableBody.innerHTML = "";
    myLibrary.forEach((book) => {
        const htmlBook = `
            <tr>
                <th scope="row">1</th>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.status}</td>
            </tr>
            `;
            $tableBody.insertAdjacentHTML("afterbegin", htmlBook);
    });
}
render();