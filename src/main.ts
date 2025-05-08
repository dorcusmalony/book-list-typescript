// --- Starter JavaScript Code ---

// A simple Book class (using constructor function in JS)
class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
  
// Function to display book information
function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");
  const bookDiv = document.createElement("div");
  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;
  if (bookList) {
      bookList.appendChild(bookDiv);
  } else {
      console.error("Error: 'book-list' element not found.");
  }
}

// Create some book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

// Display the books on the webpage
displayBook(book1);
displayBook(book2);

// Task 3: Create an interface for a "Review" object
interface Review {
  bookId: number;
  rating: number;
  comment: string;
}

// Task 4: Add a function to add a review to a book
const reviews: Review[] = [];

function addReview(bookId: number, rating: number, comment: string): void {
  const review: Review = { bookId, rating, comment };
  reviews.push(review);
}

// Example usage of addReview
addReview(1, 5, "Amazing book!");
addReview(2, 4, "Great read, but a bit long.");

// Task 5: Add type annotations to the new variables and functions
// (Already done above for `reviews` and `addReview`)