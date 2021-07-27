/*
 The books array contain the list of books in the shopping cart.
 DO NOT EDIT THIS ARRAY


JSDOM: Render Pattern
Instructions

You are helping your local bookstore build a shopping cart for their website. The list of books, prices and quantities are stored in an array named books. You wish to create a few helper functions to display the cart, sort the books and make small modifications to the cart.
Existing Files
file path 	description
index.html 	Contains the initial HTML page with placeholder elements. Your render() function will target these elements. You should not edit the HTML file in any way.
index.css 	A few basic styles. This challenge does not focus on style. You may ignore this file.
index.js 	You need to write your JavaScript code in this file. This is the only file that you need to edit.
test/render.test.js 	The tests your code will run against. You do not need to edit this file.
Tasks

The books array contain books in the following format:

{
  "title": "",
  "authors": ["", ""],
  "description": "",
  "price": 0,
  "rating": 5,
  "quantity": 1
}

Write the following functions in the index.js file.
renderBook()

This function accepts a book object in the format described above.
Create and return the HTML to render a single book. The HTML for a single book should look like this:

<div class="book">
  <div class="details">
    <div class="title">
      Elements of the Theory of Computation
      <span class="rating">(4.7 stars)</span>
    </div>
    <div class="authors">by Harry Lewis, Christos H. Papadimitriou</div>
    <div class="description">
      Algorithms, complexity analysis, and algorithmic ideas are introduced
      informally in Chapter 1, and are pursued throughout the book.
    </div>
    <button class="removeBtn">Remove from cart</button>
  </div>
  <div class="quantity">2 @ $182.65</div>
  <div class="price">$365.30</div>
</div>

calculateTotal()

Calculate the total price of all items in the cart. Take into consideration that some items have a quantity > 1. return the total price.
render()

Render the array of books and the cart total and insert them into the DOM.
The books should be rendered in the section with id "cartItems". If there are no items in the cart the text "Nothing in cart" should be inserted here instead.
The total should be rendered in the div with class "total-price" in the section with id "cartTotal". If there are no items in cart the total should show "\$0".
sortByPrice()

Sort the books array by price in ascending order.

Attach an event listener to the #sortBtn button that firsts sorts the array with the sortByPrice() function then calls render().
main()

Perform all the startup tasks in the main function.

    attach required event listeners
    call the render() function


*/

window.books = [
  {
    title: "PROLOG Programming for Artificial Intelligence",
    authors: ["Ivan Bratko"],
    description:
      "Prolog has its roots in logic; however the main aim of this book is to teach Prolog as a practical programming tool.",
    price: 89.29,
    rating: 4.5,
    quantity: 1,
  },
  {
    title: "Elements of the Theory of Computation",
    authors: ["Harry Lewis", "Christos H. Papadimitriou"],
    description:
      "Algorithms, complexity analysis, and algorithmic ideas are introduced informally in Chapter 1, and are pursued throughout the book.",
    price: 182.65,
    rating: 4.7,
    quantity: 2,
  },
  {
    title: "The Silmarillion",
    authors: ["J.R.R. Tolkien"],
    description:
      "THE SILMARILLION is the core of J.R.R. Tolkien's imaginative writing, a work whose origins stretch back to a time long before THE HOBBIT.",
    price: 14.85,
    rating: 5,
    quantity: 1,
  },
  {
    title: "An Introduction to the Analysis of Algorithms",
    authors: ["Sedgewick Robert", "Flajolet Philippe"],
    description: "Methods and models for mathematically analyzing algorithms.",
    price: 51.19,
    rating: 4.2,
    quantity: 10,
  },
  {
    title: "The Art of Computer Programming, Volumes 1-4",
    authors: ["Donald E. Knuth"],
    description:
      "The bible of all fundamental algorithms and the work that taught many of today’s software developers most of what they know about computer programming.",
    price: 189.98,
    rating: 5,
    quantity: 2,
  },
];


///////////////////////////////
// WRITE YOUR SOLUTION BELOW //
///////////////////////////////

/*
 Create and return the HTML to render a single book.
 The `book` parameter is an object representing a single book. 

 {
  "title": "",
  "authors": ["", ""],
  "description": "",
  "price": 0,
  "rating": 5,
  "quantity": 1
}
*/
function renderBook({title, authors, description, price, rating, quantity}) {
  const total = price * quantity;
  return `
  <div class="book">
    <div class="details">
      <div class="title">
        ${title}
        <span class="rating">(${rating} stars)</span>
      </div>
      <div class="authors">${authors.map((author)=>author)}</div>
      <div class="description">
        ${description}
      </div>
      <button class="removeBtn">Remove from cart</button>
    </div>
    <div class="quantity">${quantity} @ ${price}</div>
    <div class="price">$${total}</div>
  </div> `;
}

/*
  Calculate and return the total price of all items in the cart.
 */
function calculateTotal() {
  return books.reduce((total, book)=>total += book.price * book.quantity, 0);
}

/*
  Render the array of books and the cart total and insert them on the DOM.
  The books should be rendered in the `section` with id "cartItems".
  The total should be rendered in the `section` with id "cartTotal".
*/
function render() {
  const cartItems = document.querySelector("#cartItems");
  if (books.length === 0){
    cartItems.innerText = `Nothing in cart`;
  }else{
    cartItems.innerHTML = books.map((book)=>renderBook(book));
  };

  const sortHandler = (evt) => {
    sortByPrice();
    
  }

  const sortPrice = document.querySelector('#sortBtn');
  sortPrice.addEventListener("click", sortHandler);

  document.querySelector(".total-price").innerText = `$${calculateTotal()}`;
}

/*
  Sort the books array by price in ascending order then call render()
*/
function sortByPrice() {
  const sortedBooks = books.sort((bookA, bookB)=>bookA.price - bookB.price);
  const sortedBooksHTML = sortedBooks.map((book)=>renderBook(book));
  cartItems.innerHTML = sortedBooksHTML;
}

/*
  Perform all startup tasks here. Use this function to attach the required event listeners
  then call render()
*/

function main() {
  render();
}

window.addEventListener("DOMContentLoaded", main);

/////////////////////////////////
// DO NOT EDIT BELOW THIS LINE //
/////////////////////////////////
window.render = render;
window.calculateTotal = calculateTotal;
window.sortByPrice = sortByPrice;
