Library Management System
This is a library management system that allows users to view and manage books, accounts, and borrowing history.

Installation
To use this library management system, you will need to have Node.js installed on your computer. Once you have Node.js installed, follow these steps:

Clone this repository to your local machine.
Navigate to the root directory of the project in your terminal.
Run npm install to install the necessary dependencies.
Usage
books.js
The books.js file contains functions for managing books in the library.

findBookById(books, id)
This function takes an array of book objects and an id as input and returns the book object with the matching id.

partitionBooksByBorrowedStatus(books)
This function takes an array of book objects as input and returns an array of two arrays: the first array contains books that have been borrowed, and the second array contains books that have not been borrowed.

getBorrowersForBook(book, accounts)
This function takes a book object and an array of account objects as input and returns an array of the first 10 borrowers for the book.

getMostCommonGenres(books)
This function takes an array of book objects as input and returns an array of the top 5 most common genres in the library, along with the number of books in each genre.

accounts.js
The accounts.js file contains functions for managing accounts in the library.

findAccountById(accounts, id)
This function takes an array of account objects and an id as input and returns the account object with the matching id.

sortAccountsByLastName(accounts)
This function takes an array of account objects as input and returns an array of the same objects, sorted by last name in ascending order.

getTotalNumberOfBorrows(account, books)
This function takes an account object and an array of book objects as input and returns the total number of borrows for the account.

getBooksPossessedByAccount(account, books, authors)
This function takes an account object, an array of book objects, and an array of author objects as input and returns an array of book objects that are currently borrowed by the account.

home.js
The home.js file contains functions for displaying information about the library.

getTotalBooksCount(books)
This function takes an array of book objects as input and returns the total number of books in the library.

getTotalAccountsCount(accounts)
This function takes an array of account objects as input and returns the total number of accounts in the library.

getBooksBorrowedCount(books)
This function takes an array of book objects as input and returns the total number of books that are currently borrowed.

getMostCommonGenres(books)
This function get the most common genre from the books array

getMostPopularBooks(books)
This function takes an array of book objects as input and returns an array of the top 5 most popular books in the array based on the number of borrows.

Contributing
If you would like to contribute to this library management system, please fork the repository and submit a pull request with your changes.
