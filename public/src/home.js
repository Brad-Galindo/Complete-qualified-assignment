// This function takes an array of book objects as input and returns the total count of books in the array.
function getTotalBooksCount(books) {

  let count = 0;
// Iterates over each book in the array and increments the count variable for each book.
  for (let book of books){
    count++;
  }
return count;
}

// This function takes an array of account objects as input and returns the total count of accounts in the array.
function getTotalAccountsCount(accounts) {
  
  let count = 0;
// Iterates over each account in the array and increments the count variable for each account.  
  for (let account in accounts){
    count++;
  }
  return count;
}

// This function takes an array of book objects as input and returns the total count of books that are currently borrowed.
function getBooksBorrowedCount(books) {
  
  let count = 0;
// Iterates over each book in the array and each borrow object in the book's borrows array.
// If the borrow object has not been returned, it increments the count variable.  
  for (let book of books){
    for (let borrow of book.borrows){
      if (!borrow.returned){
        count++;
      }
    }
  }
  return count;
}

// This function takes an array of book objects as input and returns an array of the top 5 most common genres in the array.
function getMostCommonGenres(books) {
  // Define your helper function
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Uses the reduce method to create an object that counts the number of books for each genre.
  const genreCounts = books.reduce((acc, {genre}) => {acc[genre] = (acc[genre] || 0) + 1; return acc;}, {});

  // Uses the Object.entries method to convert the object into an array of key-value pairs, sorts the array by the count value in descending order, and returns the top 5 genres as an array of objects with name and count properties.
  const sortedGenres = Object.entries(genreCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 5)
    .map(([name, count]) => ({name: capitalizeFirstLetter(name), count}));

  return sortedGenres;
}


// This function takes an array of book objects as input and returns an array of the top 5 most popular books in the array based on the number of borrows.
function getMostPopularBooks(books) {
    // Uses the reduce method to create an object that counts the number of borrows for each book.
  const popularityCount = books.reduce((acc, {borrows, id}) => {borrows.forEach(() => {acc[id] = (acc[id] || 0) + 1;}); return acc;}, {}); 
    // Uses the Object.entries method to convert the object into an array of key-value pairs, sorts the array by the count value in descending order, and returns the top 5 books as an array of objects with name and count properties.
  const mostPopular = Object.entries(popularityCount)
  .sort(([, countA],[, countB]) => countB - countA)
  .slice(0, 5)
  .map(([id, count]) => { 
      // Finds the book object with the matching id and returns an object with the book title and borrow count.
      const book = books.find((book) => { return book.id === id});
      return { name: book.title, count: count };
    });

  return mostPopular;
}

function getMostPopularAuthors(books, authors) {
  
  // Uses the reduce method to create an object that counts the number of borrows for each author.
  const popularityCount = books.reduce((acc, { borrows, authorId }) => {
    const author = authors.find(author => author.id === authorId);
    if (author) {
      const name = `${author.name.first} ${author.name.last}`;
      acc[name] = (acc[name] || 0) + borrows.length;
    }
    return acc;
  }, {});

  // Uses the Object.entries method to convert the object into an array of key-value pairs, sorts the array by the count value in descending order, and returns the top 5 authors as an array of objects with name and count properties.
  const mostPopular = Object.entries(popularityCount)
    .map(([name, count]) => ({ name, count }))
    .filter(author => author.count > 0) // Filters out any authors with 0 borrows
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return mostPopular;
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
