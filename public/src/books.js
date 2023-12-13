// This function takes an array of author objects and an id as input and returns the author object with the matching id.
function findAuthorById(authors, id) {

  // Uses the find method to find the author object with the matching id and returns it.
  let found = authors.find((author) => author.id === id)
  return found;
}

// This function takes an array of book objects and an id as input and returns the book object with the matching id.
function findBookById(books, id) {

  // Uses the find method to find the book object with the matching id and returns it.
  let found = books.find((book) => book.id === id);
  return found;

}

// This function takes an array of book objects as input and returns an array of two arrays: one for books that are currently checked out and one for books that have been returned.
function partitionBooksByBorrowedStatus(books) {
  
  const returnedBooks = [];
  const outBooks = [];

  // Iterates over each book in the array and checks the status of the first borrow object in the book's borrows array.
  // If the borrow object has not been returned, adds the book object to the outBooks array.
  // If the borrow object has been returned, adds the book object to the returnedBooks array.
  for (let book of books){
    const [firstBorrow] = book.borrows;
    
    if (!firstBorrow.returned){
      outBooks.push(book);
    }
    else {
      returnedBooks.push(book);
    }
  }

  // Combines the outBooks and returnedBooks arrays into a single array and returns it.
  const allBooks = [outBooks,returnedBooks];
  return allBooks;

}
  
// This function takes a book object and an array of account objects as input and returns an array of the first 10 borrowers for the book.
function getBorrowersForBook(book, accounts) {
  
  const borrowers = [];
  
  // Iterates over each borrow object in the book's borrows array and finds the corresponding account object in the accounts array.
  // Combines the borrow object and account object into a single object and adds it to the borrowers array.
  for (let borrow of book.borrows){
    const account = accounts.find(acc => acc.id === borrow.id);
    const borrower = {...borrow, ...account};
    borrowers.push(borrower);
  }
  
  // Returns the first 10 borrowers in the borrowers array.
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
