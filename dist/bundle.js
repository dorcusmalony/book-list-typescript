/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

// --- Starter JavaScript Code ---
// A simple Book class (using constructor function in JS)
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    return Book;
}());
// Function to display book information
function displayBook(book) {
    var bookList = document.getElementById("book-list");
    var bookDiv = document.createElement("div");
    bookDiv.innerHTML = "\n    <h2>".concat(book.title, "</h2>\n    <p>By ").concat(book.author, ", ").concat(book.year, "</p>\n  ");
    if (bookList) {
        bookList.appendChild(bookDiv);
    }
    else {
        console.error("Error: 'book-list' element not found.");
    }
}
// Create some book objects
var book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
var book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
// Display the books on the webpage
displayBook(book1);
displayBook(book2);
// Task 4: Add a function to add a review to a book
var reviews = [];
function addReview(bookId, rating, comment) {
    var review = { bookId: bookId, rating: rating, comment: comment };
    reviews.push(review);
}
// Example usage of addReview
addReview(1, 5, "Amazing book!");
addReview(2, 4, "Great read, but a bit long.");
// Task 5: Add type annotations to the new variables and functions
// (Already done above for `reviews` and `addReview`)

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gLS0tIFN0YXJ0ZXIgSmF2YVNjcmlwdCBDb2RlIC0tLVxuLy8gQSBzaW1wbGUgQm9vayBjbGFzcyAodXNpbmcgY29uc3RydWN0b3IgZnVuY3Rpb24gaW4gSlMpXG52YXIgQm9vayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIHllYXIpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcbiAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcbiAgICB9XG4gICAgcmV0dXJuIEJvb2s7XG59KCkpO1xuLy8gRnVuY3Rpb24gdG8gZGlzcGxheSBib29rIGluZm9ybWF0aW9uXG5mdW5jdGlvbiBkaXNwbGF5Qm9vayhib29rKSB7XG4gICAgdmFyIGJvb2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29rLWxpc3RcIik7XG4gICAgdmFyIGJvb2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvb2tEaXYuaW5uZXJIVE1MID0gXCJcXG4gICAgPGgyPlwiLmNvbmNhdChib29rLnRpdGxlLCBcIjwvaDI+XFxuICAgIDxwPkJ5IFwiKS5jb25jYXQoYm9vay5hdXRob3IsIFwiLCBcIikuY29uY2F0KGJvb2sueWVhciwgXCI8L3A+XFxuICBcIik7XG4gICAgaWYgKGJvb2tMaXN0KSB7XG4gICAgICAgIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tEaXYpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiAnYm9vay1saXN0JyBlbGVtZW50IG5vdCBmb3VuZC5cIik7XG4gICAgfVxufVxuLy8gQ3JlYXRlIHNvbWUgYm9vayBvYmplY3RzXG52YXIgYm9vazEgPSBuZXcgQm9vayhcIlRoZSBIb2JiaXRcIiwgXCJKLlIuUi4gVG9sa2llblwiLCAxOTM3KTtcbnZhciBib29rMiA9IG5ldyBCb29rKFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzXCIsIFwiSi5SLlIuIFRvbGtpZW5cIiwgMTk1NCk7XG4vLyBEaXNwbGF5IHRoZSBib29rcyBvbiB0aGUgd2VicGFnZVxuZGlzcGxheUJvb2soYm9vazEpO1xuZGlzcGxheUJvb2soYm9vazIpO1xuLy8gVGFzayA0OiBBZGQgYSBmdW5jdGlvbiB0byBhZGQgYSByZXZpZXcgdG8gYSBib29rXG52YXIgcmV2aWV3cyA9IFtdO1xuZnVuY3Rpb24gYWRkUmV2aWV3KGJvb2tJZCwgcmF0aW5nLCBjb21tZW50KSB7XG4gICAgdmFyIHJldmlldyA9IHsgYm9va0lkOiBib29rSWQsIHJhdGluZzogcmF0aW5nLCBjb21tZW50OiBjb21tZW50IH07XG4gICAgcmV2aWV3cy5wdXNoKHJldmlldyk7XG59XG4vLyBFeGFtcGxlIHVzYWdlIG9mIGFkZFJldmlld1xuYWRkUmV2aWV3KDEsIDUsIFwiQW1hemluZyBib29rIVwiKTtcbmFkZFJldmlldygyLCA0LCBcIkdyZWF0IHJlYWQsIGJ1dCBhIGJpdCBsb25nLlwiKTtcbi8vIFRhc2sgNTogQWRkIHR5cGUgYW5ub3RhdGlvbnMgdG8gdGhlIG5ldyB2YXJpYWJsZXMgYW5kIGZ1bmN0aW9uc1xuLy8gKEFscmVhZHkgZG9uZSBhYm92ZSBmb3IgYHJldmlld3NgIGFuZCBgYWRkUmV2aWV3YClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==