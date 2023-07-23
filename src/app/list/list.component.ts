import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Component } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  data = this.BookService.list; // Array to store the list of books fetched from the BookService
  searchResult = this.data; // Array to store the filtered search results

  searchTerm: string = ''; // The search term entered by the user

  constructor(
    private BookService: BookService, // Service to interact with book data
     private router: Router // Used for navigation between routes
  ) {}

  // Method to navigate to the 'edit-book' page with the specific book ID
  edit(book: Book) {
    // Navigate to edit book page with specific id
    this.router.navigate(['/edit-book/' + book.id]);
  }

  // Method to navigate to the 'add-book' page for adding a new book
  add() {
    this.router.navigate(['/add-book/']);
  }

  // Method to delete a book by its ID
  delete(id: number) {
    // Runs the 'deleteBook' method in the BookService to delete the book
    const books = this.BookService.deleteBook(id);
    // Update both 'data' and 'searchResult' arrays with the updated list of books
    this.data = books;
    this.searchResult = books;
  }

  // Method to search books by title
  search() {
    // Filter the books based on the search term (case-insensitive) and update 'searchResult'
    this.searchResult = this.data.filter((book) => {
      return book.title.toLowerCase().includes(this.searchTerm.toLowerCase());
    });    
  }
}
