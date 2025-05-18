    import {Book} from './Book.js'
    
    export class Library{

        constructor(books = []){
            
            this.library = books

        }

        addBook(newBook = []){

            this.library.push(newBook)

        }

        listBooks(){
            
            this.library.forEach((book) => {console.log(book.title)})

        }

        findBookByTitle(title){

            const foundBook = this.library.find((book) => book.title.toUpperCase() === title.toUpperCase())

            if(!foundBook){
                console.log('Livre non trouvé')
            }else{
                console.log(foundBook.title + ' de ' + foundBook.author)
            }


        }
    }

