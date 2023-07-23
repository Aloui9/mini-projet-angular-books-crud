import { Injectable } from '@angular/core';
import { Book } from '../models/book';

/**
 * Book Service to manage books
 */

@Injectable({
  providedIn: 'root',
})
export class BookService {

  private lastUsedId: number = 5; // Initialize the last used ID

  constructor() { }

  /**
   * An array to store a list of books. Initialized with some example data
   *
   * @type {Book[]}
   * @memberof BookService
   */
  list: Book[] = [
    {
      id: 1,
      title: 'Learn Javascript',
      author: 'Aloui Khalil',
      editor: 'Aloui Khalil Org',
      publishDate: new Date(),
    },
    // More books are added below for demonstration purposes
    {
      id: 2,
      title: 'Introduction to Angular',
      author: 'Mr Nidhal',
      editor: 'Tek-Up',
      publishDate: new Date('2023-07-22'),
    },
    {
      id: 3,
      title: 'Python for Beginners',
      author: 'Mohamed Haithem Bouallegui',
      editor: 'ABC Books',
      publishDate: new Date('2023-07-21'),
    },
    {
      id: 4,
      title: 'The Art of TypeScript',
      author: 'Aloui Khalil',
      editor: 'DEF Publishing',
      publishDate: new Date('2023-07-20'),
    },
    {
      id: 5,
      title: 'Java Programming',
      author: 'Aymen Hichri',
      editor: 'GHI Publishers',
      publishDate: new Date('2023-07-19'),
    },
  ];



  /**
   * Get a book by its ID from the list
   * @param id book id
   * @returns
   */

  getBookById(id: number) {
    return this.list.find((book) => book.id === id);
  }

  /**
   * Add a new book to the list
   * @param book
   * @returns
   */

  addBook(book: Book) {
    this.lastUsedId++; // Increment the last used ID
    const newBook: Book = { ...book, id: this.lastUsedId, publishDate: new Date() };
    this.list.push(newBook);
    return this.list;
  }

  // Filter out a book by its ID from the list
  filterBookById(id: number) {
    return this.list.filter((_book) => _book.id !== id);
  }

  // Delete a book by its ID from the list
  deleteBook(id: number) {
    const books = this.filterBookById(id);
    this.list = books;
    return books;
  }

  /**
   * Update a book in the list
   * @param book
   */
  updateBook(book: Book) {
    // remove book from list with filter
    const books = this.filterBookById(book.id);
    // add updated book to list.
    this.list = [...books, book];
  }
}
