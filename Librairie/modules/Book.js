export class Book {

    title 
    author

    constructor(title, author){

        this.author = author
        this.title = title

    }

    getDetails(){

        return `${this.title} de ${this.author}`

    }
}