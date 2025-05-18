import {Book} from "./modules/Book.js"
import { Library } from "./modules/Library.js"




const book1 = new Book("1984", "George Orwell");
const book2 = new Book("La F1", "Lewis");
const book3 = new Book("Le Petit Prince", "Antoine de Saint-Exupéry");

const library = new Library([book1, book2]);

library.addBook(book3)


library.findBookByTitle("la F1")



const formAddBook = document.getElementById('form-addBook')

// Ajout Livre
formAddBook.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = document.getElementById("form-title").value
    const author = document.getElementById("form-author").value

    const formBook = new Book(title, author)
    library.addBook(formBook)
    library.listBooks()

})

// Afficher Liste

const show = document.getElementById('show-books')

const bookList = document.getElementById('book-list') // un <div> ou <ul> dans ton HTML

show.addEventListener('click', () => {
    bookList.innerHTML = '' // Vide la liste à chaque clic

    library.library.forEach((book) => {
        const li = document.createElement('li')
        li.textContent = `${book.title} – ${book.author}`
        bookList.appendChild(li)
    })
})

// Faire recherche 

const formSearch = document.getElementById('form-searchBook')
const searchResult = document.getElementById('search-result')

formSearch.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = document.getElementById('search-title').value
    const foundBook = library.library.find((book) => book.title.toUpperCase() === title.toUpperCase())

    if (!foundBook) {
        searchResult.textContent = '❌ Livre non trouvé'
    } else {
        searchResult.textContent = `📖 ${foundBook.title} – ${foundBook.author}`
    }
})
