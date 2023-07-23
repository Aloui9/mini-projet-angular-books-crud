import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(
    private bookService: BookService,
    private router: Router
  ){}

  // Method to create a new book.
  create(book: Book) {
    // Ensure that the book id is a number (using Number(book.id)).
    const newBook = {
      ...book,
      id: Number(book.id),
    };
    // Add the new book to the book list using the BookService.
    this.bookService.addBook(newBook);
    // Navigate back to the 'list' route after creating the book.
    this.back();
  }

  // Method to navigate back to the 'list' route.
  back(){
    this.router.navigate(['/list']);
  }
}
