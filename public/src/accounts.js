// This function takes an array of account objects and an id as input and returns the account object with the matching id.
function findAccountById(accounts, id) {
 
  // Iterates over each account in the array and checks if the account's id matches the input id.
  // If a match is found, returns the account object.
  for (let account in accounts){
    if (accounts[account].id === id){
      return accounts[account];
    }
  }
}

// This function takes an array of account objects as input and returns the array sorted by last name in ascending order.
function sortAccountsByLastName(accounts) {
  
  // Uses the sort method to sort the array by last name in ascending order.
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1:-1 );
  return accounts;
}

// This function takes an account object and an array of book objects as input and returns the total number of borrows for the account.
function getTotalNumberOfBorrows(account, books) {
  
  let count = 0;
  const id = account.id;
  
  // Iterates over each book in the array and each borrow object in the book's borrows array.
  // If the borrow object has the same id as the input account's id, increments the count variable.
  for (let book of books){
    for (let borrow of book.borrows){
      if (id === borrow.id){
        count++;
      }
    }
  }
  return count;
}

// This function takes an account object, an array of book objects, and an array of author objects as input and returns an array of book objects that are currently borrowed by the account.
function getBooksPossessedByAccount(account, books, authors) {
  
  const borrowedBooks = [];
  const updatedBooks = [];
  const id = account.id;
  
  // Iterates over each book in the array and each borrow object in the book's borrows array.
  // If the borrow object has the same id as the input account's id and has not been returned, adds the book object to the borrowedBooks array.
  for (let book of books){
    for (let borrow of book.borrows){
      if (borrow.id === id && !borrow.returned){
        borrowedBooks.push(book);
      }
    }
  }
  
  // Iterates over each borrowed book in the borrowedBooks array and each author object in the authors array.
  // If the author object has the same id as the book's authorId, adds the author object to the book object and adds the updated book object to the updatedBooks array.
  for (let book of borrowedBooks){
    for (let author of authors){
      if (author.id === book.authorId){
        updatedBooks.push({...book, author, borrows: book.borrows});
      }
    }
  }
  
  return updatedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
