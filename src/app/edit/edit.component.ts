import { Component } from '@angular/core';
import { Book } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {

  // Initialize a new book object with default values.

  book: Book = {
    id: -1,
    title: '',
    author: '',
    editor: '',
    publishDate: new Date(),
  };
  constructor(
    private actRoute: ActivatedRoute, // Used to retrieve route parameters
    private router: Router, // Used for navigation between routes
    private bookService: BookService // Service to interact with book data
  ) {}

  ngOnInit() {
    // Subscribe to changes in the route parameters (bookId)
    this.actRoute.paramMap.subscribe((params) => {
      // Get the 'bookId' param passed from the other route.
      const id = params.get('bookId');
      // The id needs to be converted to a number.
      const book = this.bookService.getBookById(Number(id));
      if (book) {
        // If the book with the specified ID is found, update the 'book' property.
        this.book = book;
        return;
      }
      // If the book with the specified ID is not found, navigate to the 'list' route.
      this.router.navigate(['/list']);
    });
  }

  // Method to edit a book.
  edit() {
    // Object destructuring to ensure that the 'id' is a number.
    const newBook = {
      ...this.book,
      id: Number(this.book.id),
    };
    // Update the actual book using the BookService.
    this.bookService.updateBook(newBook);
    // Navigate back to the 'list' route.
    this.back();
  }

  // Method to navigate back to the 'list' route.
  back(){
    this.router.navigate(['/list']);
  }
}
